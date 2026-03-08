import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  public type Submission = {
    name : Text;
    phone : Text;
    message : Text;
  };

  module Submission {
    public func compare(s1 : Submission, s2 : Submission) : Order.Order {
      switch (Text.compare(s1.name, s2.name)) {
        case (#equal) { Text.compare(s1.message, s2.message) };
	      case (order) { order };
      };
    };
  };

  let submissions = Map.empty<Text, Submission>();

  public shared ({ caller }) func submitContact(name : Text, phone : Text, message : Text) : async () {
    if (submissions.containsKey(name)) { Runtime.trap("Submission with this name already exists. ") };
    let formSubmission = {
      name;
      phone;
      message;
    };
    submissions.add(name, formSubmission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };

  public query ({ caller }) func getSubmission(name : Text) : async Submission {
    switch (submissions.get(name)) {
      case (null) { Runtime.trap("Submission not found. ") };
      case (?submission) { submission };
    };
  };
};
