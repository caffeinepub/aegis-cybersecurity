import Time "mo:core/Time";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Array "mo:core/Array";

actor {
  type Contact = {
    id : Nat;
    name : Text;
    startupName : Text;
    websiteUrl : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let contacts = Map.empty<Nat, Contact>();
  var nextId = 0;

  public shared ({ caller }) func submitContactForm(name : Text, startupName : Text, websiteUrl : Text, email : Text, message : Text) : async () {
    let timestamp = Time.now();
    let contact : Contact = {
      id = nextId;
      name;
      startupName;
      websiteUrl;
      email;
      message;
      timestamp;
    };
    contacts.add(nextId, contact);
    nextId += 1;
  };

  public query ({ caller }) func getAllContacts() : async [Contact] {
    contacts.values().toArray();
  };
};
