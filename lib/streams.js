/**
 * Created by austin on 9/24/14.
 */

var streams = function (client) {
  this.client = client;
};

var _qsAllowedProps = [
        'resolution'
        , 'series_type'
        , 'key_by_type'
        , 'keys'
    ];

//===== streams endpoint =====
streams.prototype.activity = function(args,done) {

    var endpoint = 'activities';
    return this._typeHelper(endpoint,args,done);
};

streams.prototype.effort = function(args,done) {

    var endpoint = 'segment_efforts';
    return this._typeHelper(endpoint,args,done);
};

streams.prototype.segment = function(args,done) {

    var endpoint = 'segments';
    return this._typeHelper(endpoint,args,done);
};

streams.prototype.route = function(args,done) {

    var endpoint = 'routes';
    return this._typeHelper(endpoint,args,done);
};
//===== streams endpoint =====

//===== helpers =====
streams.prototype._typeHelper = function(endpoint,args,done) {

    var err = null
        , qs = this.client.getQS(_qsAllowedProps,args);

    //require id
    if(typeof args.id === 'undefined') {
        err = {'msg':'args must include an id'};
        return done(err);
    }

    endpoint += '/' + args.id + '/streams?' + qs;
    return this.client.getEndpoint(endpoint,args,done);
};
//===== helpers =====

module.exports = streams;
