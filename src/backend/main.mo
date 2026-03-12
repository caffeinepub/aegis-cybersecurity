import Time "mo:core/Time";
import Map "mo:core/Map";
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
  var nextId : Nat = 0;

  public shared func submitContactForm(name : Text, startupName : Text, websiteUrl : Text, email : Text, message : Text) : async () {
    let contact : Contact = {
      id = nextId;
      name;
      startupName;
      websiteUrl;
      email;
      message;
      timestamp = Time.now();
    };
    contacts.add(nextId, contact);
    nextId += 1;
  };

  public query func getAllContacts() : async [Contact] {
    Array.fromIter(contacts.values())
  };
};
