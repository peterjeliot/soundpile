SoundPile.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  parse: function (payload) {
    if (payload.shares) {
      this.shares().set(payload.shares, { parse: true });
    }

    delete payload.shares;
    return payload;
  },

  shares: function () {
    if(!this._shares) {
      this._shares = new SoundPile.Collections.Shares();
    }
    return this._shares;
  }
});