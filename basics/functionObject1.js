let party = {
    size: '50',
    location: 'mumbai',
    date : '2023-10-01',
    summery : function(){
        return `The party is on ${this.date} at ${this.location} with the people size of ${this.size}`  //this refers to the party "object" values
    }
}

console.log(party.summery())