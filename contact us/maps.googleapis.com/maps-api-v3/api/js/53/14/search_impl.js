google.maps.__gjsload__('search_impl', function(_) {
    var alb = function(a) {
            _.H.call(this, a)
        },
        clb = function(a) {
            a = a.toArray();
            blb || (blb = {
                J: "sssM",
                N: ["ss"]
            });
            return _.zf(a, blb, 1)
        },
        dlb = function(a, b) {
            _.D(a.m, 3, b)
        },
        elb = function(a) {
            _.H.call(this, a)
        },
        flb = function() {
            var a = _.Ol,
                b = _.il;
            this.h = _.Of;
            this.g = _.Wm(_.Rv, a, _.Dw + "/maps/api/js/LayersService.GetFeature", b)
        },
        ilb = function(a, b, c) {
            var d = _.HG(new flb);
            c.Ei = (0, _.Ra)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.JGa(c, _.zO(b));
            var e = [];
            e.push(_.M(c, "click", (0, _.Ra)(glb, null, a)));
            _.xb(["mouseover", "mouseout", "mousemove"],
                function(f) {
                    e.push(_.M(c, f, (0, _.Ra)(hlb, null, a, f)))
                });
            e.push(_.M(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        glb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.S(e.m, 2) ? new _.Qg(_.rp(_.J(e.m, 2, _.xp).m, 1), _.rp(_.J(e.m, 2, _.xp).m, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.m, 3), h = 0; h < g; ++h) {
                    var k = _.nn(e.m, 3, _.FO, h);
                    f.fields[k.getKey()] = k.Da()
                }
            }
            _.N(a, "click", b, c, d, f)
        },
        hlb = function(a, b, c, d, e, f, g) {
            var h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.N(a, b, c, d, e, h, g)
        },
        jlb = function() {};
    _.B(alb, _.H);
    alb.prototype.Lb = function() {
        return _.L(this.m, 2)
    };
    var blb;
    _.B(elb, _.H);
    elb.prototype.getStatus = function() {
        return _.F(this.m, 1, -1)
    };
    flb.prototype.load = function(a, b) {
        function c(g) {
            g = new elb(g);
            b(g)
        }
        var d = new alb;
        _.D(d.m, 1, a.layerId.split("|")[0]);
        _.D(d.m, 2, a.featureId);
        dlb(d, _.Ff(_.Hf(this.h)));
        for (var e in a.parameters) {
            var f = _.Cf(d.m, 4, _.FO);
            _.D(f.m, 1, e);
            _.D(f.m, 2, a.parameters[e])
        }
        a = clb(d);
        this.g(a, c, c);
        return a
    };
    flb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    jlb.prototype.uy = function(a) {
        if (_.xk[15]) {
            var b = a.o,
                c = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.j, b.set(b.get().Kf(a.g))) : a.g && _.eHa(a.g, b) && (_.xb(a.h || [], _.xh), a.h = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("clickableCities"),
                    p = a.get("travelMapRequest"),
                    q = a.get("searchPipeMetadata"),
                    r = a.get("overlayLayer"),
                    t = a.get("caseExperimentIds"),
                    v = a.get("airQualityPipeMetadata"),
                    x = a.get("directionsPipeParameters");
                b = new _.Cv;
                d = d.split("|");
                b.layerId = d[0];
                for (var z = 1; z < d.length; ++z) {
                    var y = _.A(d[z].split(":")),
                        G = y.next().value;
                    y = _.na(y);
                    b.parameters[G] = y.join(":")
                }
                e && (b.spotlightDescription = new _.au(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.yu(g));
                p && (b.travelMapRequest = new _.pv(p));
                h && (b.mapsApiLayer = new _.pn(h));
                l && (b.mapFeatures = l);
                m && (b.clickableCities = m);
                q && (b.searchPipeMetadata = new _.mq(q));
                r && (b.overlayLayer = new _.Tt(r));
                t && (b.caseExperimentIds = t.slice(0));
                v && (b.airQualityPipeMetadata = new _.Lt(v));
                x && (b.directionsPipeParameters = new _.It(x));
                b.darkLaunch = !!k;
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = c.__gm.j, a.set(a.get().Sd(b))) : ilb(a, c, b);
                _.Q(c, "Lg");
                _.P(c, 148282)
            }
        }
    };
    _.oh("search_impl", new jlb);
});