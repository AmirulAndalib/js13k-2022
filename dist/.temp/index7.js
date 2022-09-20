(() => {
  document.body.innerHTML +=
    "<canvas id=hC></canvas><h3>Souls:<b id=h3></b> / XIII</h3><h4 id=h4>loading</h4><main><nav><h2>DANTE</h2>Lucifer: <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle.\"</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 SalvatorePreviti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><b id=b5>☰</b><style>body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none;-webkit-user-select:none}body>*{position:absolute}.l #b5,.l h3{display:block;padding:10px}.l h3{bottom:0;right:5%;text-align:right}.m main,h4{right:0;top:0}h4{left:0;text-align:center}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:800px;min-width:50%;padding:1em}p{font-size:.7em}h2{color:#f61;margin:0 0 .7em}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}.m h4,h3,main{display:none}";
  let rt = !0,
    Q = 0,
    B = 0,
    st = 0,
    O = 0,
    S = 0,
    x = 0,
    nt = 0,
    y = 0,
    Y = 0,
    z = 0,
    T = 0,
    ot = 0,
    ct = 0,
    R = .066,
    w = Math.PI / 180,
    L = new DOMMatrix(),
    X = (t, e) => e < t ? t : e,
    it = t => t < 0 ? -t : t,
    q = t => t < 0 ? 0 : 1 < t ? 1 : t,
    f = (t, e) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (e < 0 ? 0 : 1 < e ? 1 : e),
    ht = t => Math.atan2(Math.sin(t *= w), Math.cos(t)) / w,
    ft = (t, e, a) =>
      ((t *= w) + (2 * (e = (e * w - t) % (2 * Math.PI)) % (2 * Math.PI) - e) * (a < 0 ? 0 : 1 < a ? 1 : a)) / w,
    mt = (t, e, a, l) => {
      let r = e - t;
      return (t += Math.sign(e - t) * X(0, (r < 0 ? -r : r) ** .9 - a) * l * 2) + (e - t) * q(l / 7);
    },
    W = (t, a) => Array.from(Array(t), (t, e) => a(e)),
    ut = (t, e, a, l) => [t, 0, 0, 0, 0, e, 0, 0, 0, 0, (l + a) / (a - l), -1, 0, 0, 2 * l * a / (a - l), 0],
    i = ({ x: t, y: e, z: a }, l) => t * l.x + e * l.y + a * l.z,
    k = ({ x: t, y: e, z: a }) => Math.hypot(t - tt.x, e - tt.y, a - tt.z) || 0,
    xt = t => {
      let e = 0, a = 0, l = 0, r, s = t.at(-1);
      for (r of t) {
        e += (s.y - r.y) * (s.z + r.z), a += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
      }
      return r = Math.hypot(e, a, l), e /= r, a /= r, l /= r, { x: e, y: a, z: l, w: e * s.x + a * s.y + l * s.z };
    },
    j = new Float32Array(16),
    N = (
      {
        m11: t,
        m12: e,
        m13: a,
        m14: l,
        m21: r,
        m22: s,
        m23: n,
        m24: o,
        m31: c,
        m32: i,
        m33: h,
        m34: f,
        m41: m,
        m42: u,
        m43: x,
        m44: g,
      },
      y = j,
      M = 0,
    ) => (M *= 16,
      y[M++] = t,
      y[M++] = e,
      y[M++] = a,
      y[M++] = l,
      y[M++] = r,
      y[M++] = s,
      y[M++] = n,
      y[M++] = o,
      y[M++] = c,
      y[M++] = i,
      y[M++] = h,
      y[M++] = f,
      y[M++] = m,
      y[M++] = u,
      y[M++] = x,
      y[M] = g,
      y),
    E = -11,
    U = 17,
    K = -90,
    G = 0,
    V = 0,
    h = (t, e, a) => (t.D = a, t.A = e, t),
    C = (t, l, e = t.A) =>
      h(
        t.map(t => {
          let e, a;
          return { x: t, y: e, z: a } = t,
            { x: t, y: e, z: a } = l.transformPoint({ x: t, y: e, z: a }),
            { x: t, y: e, z: a };
        }),
        e,
        t.D,
      ),
    m = (t, e, a) => t.map(t => C(t, e, a)),
    F = (a, l = 0) =>
      W(a, t => {
        let e = Math.cos(2 * Math.PI * t / a);
        return { x: Math.sin(2 * Math.PI * t / a), y: 0, z: (e < 0 ? -e : e) < .01 ? e : e < 0 ? e - l : e + l };
      }),
    s = (l, r, s) =>
      l.map((t, e, { length: a }) => h([t, r[a - e - 1], r[a - (e + 1) % a - 1], l[(e + 1) % a]], l.A, s)),
    u = (
      t,
      e,
      a = 0,
      l,
    ) => (l = t.length ? t : F(t, l),
      t = C(l, L.translate(0, 1).scale3d(0 < a ? a : 1)),
      a = C(l, L.translate(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
      [...s(a, t, e), t, a]),
    D = (
      l,
      r = l,
      s = (
        t,
        e,
      ) => (e *= Math.PI / r,
        { x: Math.cos(t *= 2 * Math.PI / l) * Math.sin(e), y: Math.cos(e), z: Math.sin(t) * Math.sin(e) }),
    ) => {
      let n = [];
      for (let a = 0; l > a; a++) {
        for (let e = 0; r > e; e++) {
          let t = h([], 0, 1);
          n.push(t),
            t.push(s(a, e, t)),
            e && t.push(s((a + 1) % l, e, t)),
            r - 1 > e && t.push(s((a + 1) % l, e + 1 % r, t)),
            t.push(s(a, e + 1 % r, t));
        }
      }
      return n;
    },
    gt = (t, e, a, l) => {
      let r = 0,
        s = 0,
        n = 0,
        o = 1 / 0,
        c = -1 / 0,
        i = 1 / 0,
        h = -1 / 0,
        f = 1 / 0,
        m = -1 / 0,
        u = 1.1 * (a - e),
        x = new DOMMatrix(ut(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, e, a)).multiplySelf(t).invertSelf();
      return t = W(
        8,
        t => (t = x.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
          r -= t.x = (u * t.x | 0) / u / t.w,
          s -= t.y = (u * t.y | 0) / u / t.w,
          n -= t.z = (u * t.z | 0) / u / t.w,
          t),
      ),
        e = L.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
        C(t, e).map(({ x: t, y: e, z: a }) => {
          o = t > o ? o : t,
            c = c > t ? c : t,
            i = e > i ? i : e,
            h = h > e ? h : e,
            f = a > f ? f : a,
            m = m > a ? m : a;
        }),
        f *= f < 0 ? l : 1 / l,
        m *= 0 < m ? l : 1 / l,
        L.scale(2 / (c - o), 2 / (h - i), 2 / (f - m)).translateSelf((c + o) / -2, (h + i) / -2, (f + m) / 2)
          .multiplySelf(e);
    },
    J = [],
    g = (t, e = L, a) => St.s.push(...m(t, e, a)),
    M = (t, e = 1) => {
      let a = St;
      return J.push(St = e = { l: L, F: J.length, H: e, s: [] }), t(e), St = a, e;
    },
    yt = (t, e = 35633) => (e = lt.c6x(e), lt.s3c(e, t), lt.c6a(e), e),
    Mt = (t, e) => {
      let a = {}, l = lt.c1h();
      return lt.abz(l, t), lt.abz(l, yt(e, 35632)), lt.l8l(l), t => t ? a[t] || (a[t] = lt.gan(l, t)) : lt.u7y(l);
    },
    zt = t => Math.sin(t * Math.PI * 2),
    _ = [],
    vt = () => {
      et || !rt ? Ht.disconnect() : Ht.connect(Dt.destination), b4.innerHTML = "Music: " + rt;
    },
    pt = (t = !1) => {
      if (et !== t) {
        et = t, at = 0;
        try {
          t ? document.exitPointerLock() : Ht.start();
        } catch {}
        document.body.className = t ? "l m" : "l", vt();
      }
    },
    Z = (t, e, a) => t + (e - t) * q(1 - Math.exp(-a * R)),
    t = ({ j: t }) => t,
    $ = [],
    dt = [],
    bt = () => {
      let t = f($[12].g, $[13].g), e = (O > x && (h4.innerHTML = "", x = 0), Z(z, 0, 1));
      z = e + (ht(z + 60 * R) - e) * q($[5].g - $[6].i),
        e = Z(y, 0, 5),
        y = e + (ht(y + 56 * R) - e) * (t < 0 ? 0 : 1 < t ? 1 : t),
        e = Z(Y, 0, 4),
        Y = e + (ht(Y + 48 * R) - e) * (t < 0 ? 0 : 1 < t ? 1 : t),
        t = 2 * $[9].i - 1,
        ct = Z(ct, $[9].i, .2 + .3 * (t < 0 ? -t : t)),
        ot = Z(ot, T ? ot + (-9 - ot) * q(1.5 * R) : q(O / 3), 1),
        $[0].j && .7 < $[0].g && (S < 13
          ? (T || (h4.innerHTML = "Not leaving now, there are souls to catch!", x = O + 3), $[0].j = 0)
          : T
            || (T || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", x = O + 1 / 0), T = 1));
      for (let t of J) t.h && (t.l = t.h(t));
      for (let t of $) t.h();
      for (let t of dt) t.h();
    },
    wt = () => {
      S = dt.reduce((t, e) => t + e.j, 0),
        h3.innerHTML = " " + ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][S];
    },
    H = () => {
      wt(), localStorage.DanteSP22 = JSON.stringify([$.map(t), dt.map(t), nt, O, ct]);
    },
    c = (l, r) => {
      let s, n, o, c = r.C;
      for (let t = 0; c.length > t; ++t) {
        if ((o = i(l, c[t]) - l.w) < -8e-5 ? n = r : 8e-5 < o && (s = r), n && s) {
          n = [], o = [], c = r.C, t = r.B;
          let e = c.at(-1), a = i(l, e) - l.w;
          for (let t of c) {
            s = i(l, t) - l.w,
              a < 8e-5 && o.push(e),
              -8e-5 < a && n.push(e),
              (8e-5 < a && s < -8e-5 || a < -8e-5 && 8e-5 < s)
              && (a /= s - a,
                e = { x: e.x + (e.x - t.x) * a, y: e.y + (e.y - t.y) * a, z: e.z + (e.z - t.z) * a },
                n.push(e),
                o.push(e)),
              e = t,
              a = s;
          }
          return {
            o: 2 < n.length && { C: h(n, c.A, c.D), B: t, u: r },
            m: 2 < o.length && { C: h(o, c.A, c.D), B: t, u: r },
          };
        }
      }
      return { o: s, m: n };
    },
    n = (a, l, r = xt(l.C)) => {
      if (a) {
        let { o: t, m: e } = c(a, l);
        t || e || a.s.push(l), t && (a.o = n(a.o, t, r)), e && (a.m = n(a.m, e, r));
      } else a = { x: r.x, y: r.y, z: r.z, w: r.w, s: [l], o: 0, m: 0 };
      return a;
    },
    a = (e, r, s) => {
      let n = [],
        o = (t, e) => {
          let { o: a, m: l } = c(t, e);
          a || l || (0 < s * i(t, r) ? a = e : l = e), a && (t.o ? o(t.o, a) : n.push(a)), l && t.m && o(t.m, l);
        };
      for (let t of r.s) o(e, t);
      return n;
    },
    o = (t, e) => t && (e(t), o(t.o, e), o(t.m, e)),
    It = t => t.length ? t.reduce((t, e) => n(t, { C: e, B: 0, u: 0 }), 0) : t,
    l = t => (o(t, e => {
      let t = e.m;
      e.m = e.o, e.o = t, e.x *= -1, e.y *= -1, e.z *= -1, e.w *= -1;
      for (let t of e.s) t.B = !t.B;
    }),
      t),
    v = (...t) =>
      t.reduce((l, e) => {
        let r = [];
        if (l = It(l), e) {
          e = It(e), o(l, t => t.s = a(e, t, 1)), o(e, t => r.push([t, a(l, t, -1)]));
          for (let [e, a] of r) for (let t of a) n(l, t, e);
        }
        return l;
      }),
    p = (t, ...e) => l(v(l(It(t)), ...e)),
    d = t => {
      let a = new Map(),
        l = new Map(),
        r = e => {
          if (e.u) {
            let t = a.get(e.u);
            t ? (l.delete(t), e = r(e.u)) : a.set(e.u, e);
          }
          return e;
        };
      return o(t, e => {
        for (let t of e.s) l.set(r(t), t.B);
      }),
        Array.from(l, ([{ C: t }, e]) => {
          let a = t.map(({ x: t, y: e, z: a }) => ({ x: t, y: e, z: a }));
          return h(e ? a.reverse() : a, t.A, t.D);
        });
    },
    tt = { x: 0, y: 0, z: 0 },
    b = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
    I = r => {
      let s = St,
        n = $.length,
        o = {
          j: 0,
          g: 0,
          i: 0,
          u: s,
          h() {
            let t = o.j, e = o.g, a = o.i, l = s.l.multiply(r);
            o.I = l,
              k(l.transformPoint()) < 2.9 && _[5] && (e < .3 || .7 < e)
              && (o.j = t ? 0 : 1, n && !T && (h4.innerHTML = "* click *", x = O + 1), nt = n, H()),
              o.g = Z(e, t, 4),
              o.i = Z(a, t, 1),
              o.l = l.rotate(60 * o.g - 30, 0).translateSelf(0, 1);
          },
        };
      $.push(o),
        g(u(5), r.translate(-.2).rotate(90, 90).scale(.4, .1, .5), P(.4, .5, .5)),
        g(u(5), r.translate(.2).rotate(90, 90).scale(.4, .1, .5), P(.4, .5, .5)),
        g(u(b), r.translate(0, -.4).scale(.5, .1, .5), P(.5, .5, .4));
    },
    A = (o, ...t) => {
      let c = -1,
        i = 0,
        h = 0,
        f = 0,
        m = 0,
        u = 0,
        g = 3,
        M = 1,
        v = {
          j: 0,
          h() {
            if (!v.j) {
              e = 1;
              let a = 1 / 0, l, t;
              for (l of d) {
                var e, r = l.w, s = Math.hypot(b - l.x, I - l.z), n = s - r;
                t ||= s < r, 0 < n && a > n && (a = n, z = l), e = e < (r = s / r) ? e : r;
              }
              if (!t) {
                r = z.w;
                let t = Math.hypot(s = b - (a = z.x), n = I - (l = z.z)), e = Math.atan2(-n, s);
                M && (h = (Math.random() - .5) * Math.PI / 2, g = X(1, g / (1 + Math.random()))),
                  e += h,
                  c = -Math.cos(e),
                  i = Math.sin(e),
                  .1 < t && (t = (t < r ? t : r) / (t || 1), b = s * t + a, I = n * t + l);
              }
              M = t,
                g = Z(g, 3 + 6 * (1 - e), 3 + e),
                A = Z(A, b = Z(b, b + c, g), g),
                P = Z(P, I = Z(I, I + i, g), g),
                f = ft(f, Math.atan2(A - m, P - u) / w - 180, 3 * R),
                m = A,
                u = P,
                e = (v.l = p.l.multiply(o.translate(A, 0, P).rotateSelf(0, f, 7 * Math.sin(1.7 * O)))).transformPoint(),
                k(e) < 1.5
                && (v.j = 1,
                  e = [
                    ,
                    "Mark Zuckemberg<br>made the world worse",
                    ,
                    "Andrzej Mazur<br>for the js13k competition",
                    "Donald Trump<br>lies",
                    "Kim Jong-un<br>Dictator, liked pineapple on pizza",
                    "Maxime Euziere<br>forced me to finish this game",
                    "She traded NFTs apes",
                    ,
                    "Vladimir Putin<br>evil war",
                    "He was not a good person",
                    ,
                    "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
                  ][S] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                  t = S && S < 12 ? 5 : 7,
                  T || (h4.innerHTML = e, x = O + t),
                  H());
            }
            v.j
              && (e = y % 4 - 2,
                v.l = J[2].l.translate(
                  y % 4 * 1.2 - 1.7 + Math.sin(O + y) / 7,
                  -2,
                  1.7 * (y / 4 | 0) - 5.5 + (e < 0 ? -e : e) + Math.cos(O / 1.5 + y) / 6,
                ));
          },
        },
        p = St,
        y = dt.length,
        d = t.map(([t, e, a]) => ({ x: t, z: e, w: a })),
        z = d[0],
        { x: b, z: I } = z,
        A = b,
        P = I;
      dt.push(v);
    },
    r = new Float32Array(624),
    At = (t, a, e) => {
      if (e = e ? jt : kt, et) {
        for (var { F: l } of (e = L.rotate(0, 40 * Math.sin(st) - 70), Ct)) N(e, r, l - 1);
        lt.uae(t, !1, r), lt.d97(4, Ct[2].G - Ct[0].v, 5123, 2 * Ct[0].v);
      } else {
        for (l = 0; J.length > l; ++l) {
          let { H: t, F: e, l: a } = J[l];
          t && N(a, r, e - 1);
        }
        for (lt.uae(t, !1, r), lt.d97(4, (a ? Ct[2].G : Ct[0].v) - 3, 5123, 6), a = 0; $.length > a; ++a) {
          let { l: t, g: e } = $[a];
          N(t, r, a), r[16 * a + 15] = 1 - e;
        }
        for (lt.uae(t, !1, r), lt.das(4, Tt.G - Tt.v, 5123, 2 * Tt.v, $.length), a = 0; a < 13; ++a) N(dt[a].l, r, a);
        lt.uae(t, !1, r), lt.das(4, e.G - e.v, 5123, 2 * e.v, 13);
      }
    },
    Pt = new Int32Array(10725888),
    P = (t, e, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * e << 8 | 255 * t,
    St,
    et,
    at,
    Yt,
    Tt,
    kt,
    jt,
    Ct,
    Ft = "data:image/svg+xml;base64,"
      + btoa(
        "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
      ),
    lt = hC.getContext("webgl2", { powerPreference: "high-performance" });
  for (let t in lt) lt[t[0] + [...t].reduce((t, e, a) => (t * a + e.charCodeAt(0)) % 434, 0).toString(36)] = lt[t];
  let Dt = new AudioContext(), Ht = Dt.createBufferSource();
  setTimeout(() => {
    let e = 0,
      t = 6,
      a = () => {
        if (h4.innerHTML += ".", !--t) {
          let i = 0,
            h = 0,
            f = 1,
            m = 0,
            u = 0,
            g = 0,
            M = !1,
            v = { x: 0, y: 0, z: 0 },
            p = new Int32Array(256),
            a = () => {
              let { u: t, I: e } = $[nt], { x: a, y: l, z: r } = e.transformPoint({ x: 0, y: 8, z: -3 });
              tt.x = v.x = a,
                tt.y = v.y = y = l,
                tt.z = v.z = r,
                I =
                  Y =
                  S =
                  A =
                  P =
                    0,
                f = 1,
                i = h = t?.F || 1;
            },
            l = t => {
              requestAnimationFrame(l);
              let e = (t - (Yt || t)) / 1e3;
              0 < R
              && (n(),
                lt.b6o(36160, F),
                lt.v5y(0, 0, 128, 128),
                lt.c4s(16640),
                lt.cbf(!0, !1, !0, !1),
                lt.uae(n("b"), !1, N(L.rotate(0, 180).invertSelf().translateSelf(-tt.x, -tt.y, .3 - tt.z))),
                At(n("c"), 0, 1),
                lt.c4s(256),
                lt.cbf(!1, !0, !0, !1),
                lt.uae(n("b"), !1, N(L.translate(-tt.x, -tt.y, -tt.z - .3))),
                At(n("c"), 0, 1),
                lt.r9r(0, 0, 128, 128, 6408, 5121, d)),
                r(),
                lt.b6o(36160, c),
                lt.v5y(0, 0, 2048, 2048),
                D[0](e),
                D[1](
                  (R = et ? _[5] = 0 : .066 < e ? .066 : e,
                    O += R,
                    st += e,
                    Yt = t,
                    0 < R && ((() => {
                      z = T = 0,
                        (() => {
                          let s = 0, n = 0, e = 0, a = 0, o = 0;
                          p.fill(0);
                          for (let t = 0; t < 31; ++t) {
                            let l = 0, r = 512 * t;
                            for (let a = 0; a < 128; a++) {
                              let t = r + 4 * a, e = (d[t] + d[1 + t]) / 255;
                              t = d[2 + t],
                                14 < a && a < 114 && (l += e),
                                t && e && (e = p[t] + 1, p[t] = e, s > e || (s = e, n = t));
                            }
                            l < 3 && 5 < t && (a += t / 32), 3 < l && (7 < t && (e += t / 15), o = 1);
                          }
                          n && (o = 1),
                            f ? n && (f = 0, h = n) : h = n || i,
                            i = n,
                            I = o,
                            A = Z(A, o ? 6.5 : 8, 4),
                            v.y += e / 41 - (o ? 1 : A) * a / 41 * A * R;
                        })(),
                        (() => {
                          for (let t = 32; t < 128; t += 2) {
                            let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                            for (let s = 1 & t; s < 128; s += 2) {
                              let t = h + 4 * s,
                                e = h + 4 * (127 - s),
                                a = d[t] / 255,
                                l = d[1 + e] / 255,
                                r = s / 63.5 - 1;
                              r = 1 - (r < 0 ? -r : r),
                                10 < s && s < 118
                                && (n = X(n, X(a * r, a * d[e] / 127.5)), o = X(o, X(l * r, l * d[1 + t] / 255))),
                                (s < 54 || 74 < s) && .001 < (t = (1 - r) * (l < a ? a : l) / 3)
                                && (s < 64 && t > c ? c = t : 64 < s && t > i && (i = t));
                            }
                            c = i - c,
                              n = o - n,
                              (c < 0 ? -c : c) > (T < 0 ? -T : T) && (T = c),
                              (n < 0 ? -n : n) > (z < 0 ? -z : z) && (z = n);
                          }
                        })();
                      let t = (_[0] ? 1 : 0) + (_[2] ? -1 : 0) + Q,
                        a = (_[1] ? 1 : 0) + (_[3] ? -1 : 0) + B,
                        l = navigator.getGamepads()[0];
                      if (l) {
                        var s, r = t => e[t]?.pressed || 0 < e[t]?.value;
                        let e = l.buttons;
                        l = l.axes,
                          s = r(1) || r(3) || r(2) || r(0),
                          s !== M && (M = s) && (_[5] = 1),
                          t += (.2 < it(-l[0]) ? -l[0] : 0) + (r(14) ? 1 : 0) + (r(15) ? -1 : 0),
                          a += (.2 < it(-l[1]) ? -l[1] : 0) + (r(12) ? 1 : 0) + (r(13) ? -1 : 0),
                          at && (.3 < it(l[2]) && (V += 80 * l[2] * R), .3 < it(l[3]) && (G += 80 * l[3] * R));
                      }
                      (a < 0 ? -a : a) < .05 && (a = 0),
                        (t < 0 ? -t : t) < .05 && (t = 0),
                        r = Math.atan2(a, t),
                        l = q(Math.hypot(a, t)),
                        t = l * Math.cos(r),
                        a = l * Math.sin(r),
                        s = q(1 - 5 * X(T < 0 ? -T : T, z < 0 ? -z : z)),
                        h || (T += S * s * R, z += Y * s * R),
                        S = Z(S, 0, I ? 8 : 4),
                        Y = Z(Y, 0, I ? 8 : 4),
                        P = Z(P, I ? (t || a ? I ? 7 : 4 : 0) * s : 0, I ? .1 < s ? 10 : t || a ? 5 : 7 : 1);
                      let e = at ? V * w : Math.PI;
                      if (
                        s = Math.sin(e) * P * R,
                          e = Math.cos(e) * P * R,
                          T -= t * e - a * s,
                          z -= t * s + a * e,
                          (e = (s = 1 === J[h].H && J[h].l || L).inverse()).m41 = 0,
                          e.m42 = 0,
                          e.m43 = 0,
                          { x: T, z } = e.transformPoint({ x: T, z, w: 0 }),
                          v.x += T,
                          v.z += z,
                          h !== b
                      ) {
                        b = h;
                        let { x: t, y: e, z: a } = s.inverse().transformPoint(tt);
                        v.x = t, v.y = e, v.z = a;
                      }
                      e = tt.x;
                      let x = tt.z, { x: n, y: o, z: c } = s.transformPoint(v);
                      tt.x = n,
                        tt.y = o,
                        tt.z = c,
                        s = it(y - o),
                        y = Z(y, o + .1, 50 * s + 5),
                        h && (S = (tt.x - e) / R, Y = (tt.z - x) / R),
                        (t || a) && (m = 90 - r / w),
                        u = ft(u, m, 8 * R),
                        g += (l - g) * q(10 * R),
                        k = mt(k, tt.x, .5, R),
                        j = mt(j, tt.y, 2, R),
                        C = mt(C, tt.z, .5, R),
                        at
                          ? (t = 200 * f,
                            E = Z(E, tt.x, 18 + t),
                            U = Z(U, tt.y + 1.5, 15 + t),
                            K = Z(K, tt.z, 18 + t),
                            G = X(G < 87 ? G : 87, -87))
                          : (E = mt(E, k, 1, 2 * R),
                            U = mt(U, j + 13 + 15 * f, 4, 2 * R),
                            K = mt(K, C + -18, 1, 2 * R),
                            1 < ((t = K - C) < 0 ? -t : t)
                            && (a = E - k,
                              r = U - j,
                              V = 270 + Math.atan2(t, a) / w,
                              G = 90 - Math.atan2(Math.hypot(t, a), r) / w)),
                        V = ht(V);
                    })(),
                      bt(),
                      1 === h && ($[9].j = tt.x < -15 && tt.z < 0 ? 1 : 0),
                      (tt.x < -25 || tt.z < 109 ? -25 : -9) > tt.y && a(),
                      _[5] = 0),
                    t = et
                      ? L.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + q(hC.clientWidth / 1e3))
                      : L.rotate(-G, -V, -0).invertSelf().translateSelf(-E, -U, -K),
                    gt(t, .3, 55, 10),
                    gt(t, 55, 177, 11)),
                ),
                o(),
                lt.b6o(36160, null),
                lt.v5y(0, 0, lt.drawingBufferWidth, lt.drawingBufferHeight),
                lt.cbf(!0, !0, !0, !0),
                lt.c4s(16640),
                D[0](),
                D[1](),
                lt.uae(o("a"), !1, ut(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
                lt.uae(o("b"), !1, N(t)),
                lt.ubu(o("k"), E, U, K),
                At(o("c"), !at, 0),
                s(),
                lt.ubu(s("j"), lt.drawingBufferWidth, lt.drawingBufferHeight, st),
                et ? lt.ubu(s("k"), 0, 0, 0) : lt.ubu(s("k"), E, U, K),
                lt.uae(s("b"), !1, N(t.inverse())),
                lt.d97(4, 3, 5123, 0);
            },
            d = new Uint8Array(65536),
            b,
            I,
            A,
            P,
            S,
            Y,
            y,
            T,
            z,
            k,
            j,
            C,
            t = ((() => {
              let e = 0,
                l = [],
                s = [],
                n = [],
                o = [],
                c = new Map(),
                i = new Int32Array(8),
                r = t => {
                  let { x: e, y: a, z: l } = h[t], r = (m[0] = e, m[1] = a, m[2] = l, c.get(t = "" + (h.D ? f : i)));
                  return void 0 !== r
                    ? (e = 3 * r, o[e] = (o[e++] + i[5]) / 2, o[e] = (o[e++] + i[6]) / 2, o[e] = (o[e] + i[7]) / 2)
                    : (c.set(t, r = c.size), s.push(e, a, l, m[3]), n.push(i[4]), o.push(i[5], i[6], i[7])),
                    r;
                },
                h,
                f = new Int32Array(i.buffer, 0, 5),
                m = new Float32Array(i.buffer);
              for (let t of J) {
                for (h of (m[3] = t.H ? t.F : 0, t.s)) {
                  let { x: t, y: e, z: a } = xt(h);
                  i[4] = 0 | h.A, i[5] = 32767 * t, i[6] = 32767 * e, i[7] = 32767 * a;
                  for (let t = 2, e = r(0), a = r(1); h.length > t; ++t) l.push(e, a, a = r(t));
                }
                t.s = null, t.v = e, t.G = e = l.length;
              }
              lt.b11(34963, lt.c1b()),
                lt.b2v(34963, new Uint16Array(l), 35044),
                lt.b11(34962, lt.c1b()),
                lt.b2v(34962, new Float32Array(s), 35044),
                lt.v7s(0, 4, 5126, !1, 0, 0),
                lt.b11(34962, lt.c1b()),
                lt.b2v(34962, new Int16Array(o), 35044),
                lt.v7s(1, 3, 5122, !0, 0, 0),
                lt.b11(34962, lt.c1b()),
                lt.b2v(34962, new Uint32Array(n), 35044),
                lt.v7s(2, 4, 5121, !0, 0, 0),
                lt.e3x(0),
                lt.e3x(1),
                lt.e3x(2);
            })(),
              yt(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`)),
            r = Mt(
              yt(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),
              `#version 300 es
void main(){}`,
            ),
            s = Mt(
              yt(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
              `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
            ),
            n = Mt(
              t,
              `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
            ),
            o = Mt(
              t,
              `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
            ),
            c = lt.c5w(),
            F = lt.c5w(),
            e = (t = lt.c3z(), lt.c25()),
            D = W(2, t => {
              let e = new Float32Array(16), a = lt.c25(), l = o(t ? "j" : "i");
              return lt.b6o(36160, c),
                lt.d45([0]),
                lt.r9l(0),
                o(),
                lt.ubh(o(t ? "h" : "g"), t),
                lt.a4v(33984 + t),
                lt.b9j(3553, a),
                lt.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                lt.t2z(3553, 10241, 9729),
                lt.t2z(3553, 10240, 9729),
                lt.t2z(3553, 34893, 515),
                lt.t2z(3553, 34892, 34894),
                lt.t2z(3553, 10243, 33071),
                lt.t2z(3553, 10242, 33071),
                t => {
                  t
                    ? (N(t, e),
                      lt.uae(r("b"), !1, e),
                      lt.fas(36160, 36096, 3553, a, 0),
                      lt.c4s(256),
                      At(r("c"), !at, 0))
                    : lt.uae(l, !1, e);
                };
            });
          s(),
            lt.ubh(s("q"), 3),
            n(),
            lt.uae(n("a"), !1, ut(1.4, .59, 1e-4, 1)),
            o(),
            lt.ubh(o("q"), 3),
            lt.e8z(2929),
            lt.e8z(2884),
            lt.c70(1),
            lt.c7a(1029),
            lt.d4n(515),
            lt.c5t(0, 0, 0, 1),
            lt.b6o(36160, F),
            lt.bb1(36161, t),
            lt.r4v(36161, 33189, 128, 128),
            lt.f8w(36160, 36096, 36161, t),
            lt.a4v(33987),
            lt.b9j(3553, e),
            lt.fas(36160, 36064, 3553, e, 0),
            lt.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
            lt.a4v(33987),
            lt.b9j(3553, lt.c25()),
            lt.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, H),
            lt.gbn(3553),
            lt.t2z(3553, 10241, 9987),
            lt.t2z(3553, 10240, 9729),
            Ct.map((t, e) => {
              t.h = e
                ? () =>
                  Ct[0].l.translate(0, g * q(.45 * Math.sin(9.1 * O + Math.PI * (e - 1) - Math.PI / 2))).rotateSelf(
                    g * Math.sin(9.1 * O + Math.PI * (e - 1)) * .25 / w,
                    0,
                  )
                : () => L.translate(tt.x, y, tt.z).rotateSelf(0, u);
            });
          try {
            let [a, l, t, e, r] = JSON.parse(localStorage.DanteSP22);
            $.map((t, e) => t.g = t.i = t.j = e ? 0 | a[e] : 0),
              dt.map((t, e) => t.j = 0 | l[e]),
              nt = t,
              O = e,
              ct = r;
          } catch {}
          ot = nt < 0 ? 0 : 1 < nt ? 1 : nt,
            h4.innerHTML = "",
            x = 0,
            wt(),
            bt(),
            a(),
            E = k = tt.x,
            U = (j = tt.y) + 13,
            K = (C = tt.z) + -18,
            (() => {
              let r = 0,
                s = 0,
                t = 0,
                e = () => {
                  hC.width = innerWidth,
                    hC.height = innerHeight,
                    _.length = Q = B = 0,
                    n = o = void 0,
                    document.hidden && pt(!0);
                },
                n,
                o,
                c;
              b1.onclick = () => pt(),
                b2.onclick = () => {
                  pt(), at = 1;
                },
                b3.onclick = () => {
                  confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
                },
                b4.onclick = () => {
                  rt = !rt, vt();
                },
                b5.onclick = () => pt(!0),
                onclick = () => {
                  c = 1, et || (_[5] = !0, at && hC.requestPointerLock());
                },
                document.onvisibilitychange = onresize = onblur = e,
                onkeydown = onkeyup = ({ code: t, target: e, type: a, repeat: l }) => {
                  l || ((e = !!a[5] && e === document.body) && ("Escape" === t || "Enter" === t && et)
                    ? et && !c || pt(!et)
                    : 5
                        === (t = {
                          KeyA: 0,
                          ArrowLeft: 0,
                          KeyW: 1,
                          ArrowUp: 1,
                          KeyD: 2,
                          ArrowRight: 2,
                          KeyS: 3,
                          ArrowDown: 3,
                          KeyE: 5,
                          Space: 5,
                          Enter: 5,
                        }[t])
                    ? e && (_[t] = 1)
                    : _[t] = e);
                },
                onmousemove = ({ movementX: t, movementY: e }) => {
                  at && (t || e) && (V += .1 * t, G += .1 * e);
                },
                hC.ontouchstart = e => {
                  if (!et) {
                    for (let t of e.changedTouches) {
                      at && t.pageX > hC.clientWidth / 2
                        ? n || (n = t, r = V, s = G)
                        : o = o || t;
                    }
                    t = st;
                  }
                },
                hC.ontouchmove = ({ changedTouches: l }) => {
                  if (!et) {
                    for (
                      let { pageX: t, pageY: e, identifier: a } of l
                    ) {
                      n?.identifier === a && (V = r + (t - n.pageX) / 3, G = s + (e - n.pageY) / 3),
                        o?.identifier === a
                        && (Q = -(t - o.pageX) / 18,
                          B = -(e - o.pageY) / 18,
                          Q = (Q < 0 ? -Q : Q) < .35 ? 0 : .8 * Q,
                          B = (B < 0 ? -B : B) < .35 ? 0 : .8 * B);
                    }
                  }
                },
                hC.ontouchend = e => {
                  for (let t of e.changedTouches) {
                    t.identifier === n?.identifier && (n = void 0),
                      t.identifier === o?.identifier && (o = void 0, B = Q = 0);
                  }
                  e.preventDefault(), e = st - t, (!t || .02 < e && e < .4) && (_[5] = !0);
                },
                oncontextmenu = () => !1,
                e(),
                pt(!0);
            })(),
            requestAnimationFrame(l);
        }
      },
      l = () => {
        if (e < 5) {
          var O, R, Q = 0, B = e++;
          let [v, p, d, b, I, A, P, S, Y, x, T, , k, z, j, C, t, F, w, D, H] =
            [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, [
              "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
              "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
              "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
              "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
              "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
              "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
            ]], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, [
              ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
              "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
              ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
              "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
              "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
              "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
            ]], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, [
              "9(((9(((9(((9(((9(((9(((9(((9",
              "9(((Q(((Q(((Q",
            ]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, [
              "9(9(9(9(9(9(9(999(9(9(9(999(9(9",
              "9(9(9(9(9(999(9(((((Q",
            ]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, [
              "((((Q(((((((Q(((((((Q(((((((Q",
              "Q((Q((Q((Q((Q((Q((((Q",
            ]]][B];
          x = x * x * 4;
          for (let M of [5513, 4562, 3891]) {
            let r = 0,
              s = 0,
              f = [],
              m,
              n,
              o,
              c,
              i,
              h = new Int32Array(768 * M),
              u = Math.PI * 2 ** (t - 8) / M,
              g = w * M & -2;
            for (let l = 0; l <= 11; ++l) {
              for (
                let t = 0, e = +"000001234556112341234556011111111112011111111112000001111112"[12 * B + l];
                t < 32;
                ++t
              ) {
                let a = (32 * l + t) * M;
                for (R = 0; R < 4; ++R) {
                  if (m = 0, e && (m = H[e - 1].charCodeAt(t + 32 * R) - 40, m += 0 < m ? 106 : 0), m) {
                    if (!(O = f[m])) {
                      let l = 0,
                        r = 0,
                        s,
                        n,
                        o = O = m,
                        c = B < 2
                          ? t => t % 1 * 2 - 1
                          : zt,
                        i = B < 2
                          ? B < 1
                            ? t => t % 1 < .5 ? 1 : -1
                            : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                          : zt,
                        h = new Int32Array(S + Y + x);
                      for (let e = 0, a = 0; S + Y + x > e; ++e, ++a) {
                        let t = 1;
                        S > e ? t = e / S : S + Y > e || (t = (1 - (t = (e - S - Y) / x)) * 3 ** (-T / 16 * t)),
                          a < 0
                          || (a -= 4 * M,
                            n = .00396 * 2 ** ((o + p - 256) / 12),
                            s = .00396 * 2 ** ((o + I - 256) / 12) * (1 + (B ? 0 : 8e-4 * 9))),
                          h[e] = 80
                              * (c(l += n * t ** (d / 32)) * v + i(r += s * t ** (A / 32)) * b
                                + (P ? (2 * Math.random() - 1) * P : 0))
                              * t | 0;
                      }
                      O = f[O] = h;
                    }
                    for (let t = 0, e = 2 * a; O.length > t; ++t, e += 2) h[e] += O[t];
                  }
                }
                for (let t, e = 0; M > e; ++e) {
                  R = 0,
                    ((t = h[O = 2 * (a + e)]) || i)
                    && (o = .00308 * k,
                      1 != B && 4 != B || (o *= Math.sin(2 ** (l - 9) / M * O * Math.PI * 2) * D / 512 + .5),
                      o = 1.5 * Math.sin(o),
                      r += o * s,
                      c = (1 - z / 255) * (t - s) - r,
                      s += o * c,
                      t = 4 == B ? s : 3 == B ? c : r,
                      B || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                      t *= j / 32,
                      i = 1e-5 < t * t,
                      n = Math.sin(u * O) * C / 512 + .5,
                      R = t * (1 - n),
                      t *= n),
                    O < g || (R += h[1 + O - g] * F / 255, t += h[O - g] * F / 255),
                    Pt[Q + O] += h[O] = R,
                    ++O,
                    Pt[Q + O] += h[O] = t;
                }
              }
            }
            Q += h.length;
          }
          setTimeout(l);
        } else {
          for (Q = Dt.createBuffer(2, 5362944, 44100), B = 0; B < 2; B++) {
            for (let t = B, e = Q.getChannelData(B); t < 10725888; t += 2) {
              e[t >> 1] = Pt[t] / 65536;
            }
          }
          Ht.buffer = Q, Ht.loop = !0;
        }
        a();
      },
      n = (t, e, a) =>
        L.translate(t + Math.sin(O + 2) / 5, e + Math.sin(.8 * O) / 3, a).rotateSelf(
          2 * Math.sin(O),
          Math.sin(.7 * O),
          Math.sin(.9 * O),
        ),
      o,
      H = new Image(),
      c = (H.onload = H.onerror = () => {
        a();
      },
        H.src = Ft,
        setTimeout(l, 9),
        (() => {
          let e = W(
              11,
              t => L.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
            ),
            a = F(18);
          return W(10, t => s(C(a, e[t]).reverse(), C(a, e[t + 1]), 1)).flat();
        })()),
      i = d(
        p(
          m(u(20, 1, 1.15, 1), L.translate(0, -3).scale(3.5, 1, 3.5), P(.7, .4, .25, .7)),
          m(u(20, 1, 1.3, 1), L.translate(0, -2.5).scale(2.6, 1, 3), P(.7, .4, .25, .2)),
          m(u(b), L.translate(4, -1.2).scale3d(2), P(.7, .4, .25, .3)),
        ),
      ),
      h = d(
        p(
          m(u(b), L.translate(0, -8).scale(6, 15, 2.2)),
          m(u(b), L.translate(0, -14.1).scale(4, 13, 4)),
          m(u(20, 1), L.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
        ),
      );
    M(() => {
      g([b.slice(1)], L.translate(-2).scale3d(3).rotate(90, 0));
    }, 0),
      M(() => {
        let r = () => {
            let t = $[2].i, e = 1 - $[4].i;
            return t < e ? t : e;
          },
          t = (e, a, l) =>
            M(t => {
              t.h = () => L.translate(r() * Math.sin(3 * e + O * e) * a),
                b.map(({ x: t, z: e }) => {
                  g(u(11, 1), L.translate(4 * t, 4, l + 4 * e).scale(.8, 3, .8), P(.5, .3, .7, .6)),
                    g(u(b), L.translate(4 * t, 7, l + 4 * e).scale(1, .3), P(.5, .5, .5, .3));
                }),
                g(d(p(
                  m(u(b), L.translate(0, 0, l).scale(5, 1, 5), P(.8, .8, .8, .3)),
                  ...[-1, 1].map(t =>
                    m(u(b), L.translate(5 * t, .2, l).rotate(0, 0, -30 * t).scale(4, 1, 2), P(.8, .8, .8, .3))
                  ),
                ))),
                g(u(b), L.translate(0, -3, l).scale(8, 2, 8), P(.4, .4, .4, .3));
            }),
          l = (M(t => {
            t.h = () => n(-12, 4.2, 40 * ot - 66), g(i), I(L.translate(0, -3, 4));
          }),
            W(7, t => m(u(6, 1), L.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), P(.3, .3, .38))).flat()),
          e = (A(L.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
            A(
              L.translate(0, 2.8),
              [5, 10, 3],
              [-5, 10, 3],
              ...F(18).map(({ x: t, z: e }) => [7 * t, 10 * e, 4.5 - 2 * (t < 0 ? -t : t)]),
            ),
            g(u(b), L.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), P(.8, .8, .8, .2)),
            b.map(({ x: t, z: e }) => g(u(6), L.translate(3 * t, 3, 15 * e).scale(.7, 4, .7), P(.6, .3, .3, .4))),
            [-23, 22].map(t => g(u(b), L.translate(0, 0, t).scale(3, 1, 8), P(.9, .9, .9, .2))),
            [-15, 15].map((e, a) => {
              g(u(b), L.translate(0, 6.3, e).scale(4, .3, 1), P(.3, .3, .3, .4)),
                g(u(b), L.translate(0, 1, e).scale(3, .2, .35), P(.5, .5, .5, .3)),
                M(t => {
                  t.h = () => L.translate(0, 4.7 * -$[a + 1].g, e), g(l);
                });
            }),
            W(5, e =>
              W(2, t =>
                g(
                  c,
                  L.translate(18.5 * (t - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                  P(1, 1, .8, .2),
                ))),
            g(u(b), L.translate(3, 1.5, -20).scale(.5, 2, 5), P(.7, .7, .7, .2)),
            g(u(b), L.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), P(.75, .75, .75, .2)),
            g(u(5), L.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), P(.6, .3, .3, .4)),
            I(L.translate(-5.4, 1.5, -19).rotate(0, -90)),
            g(
              u(b),
              L.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5),
              P(.8, .2, .2, .5),
            ),
            g(d(
              p(
                v(
                  m(u(6, 0, 0, .3), L.translate(8, -3, -4).scale(13, 1, 13), P(.7, .7, .7, .2)),
                  m(u(6), L.translate(0, -8).scale(9, 8, 8), P(.4, .2, .5, .5)),
                  m(u(6, 0, 0, .3), L.translate(0, -.92).scale(13, 2, 13), P(.8, .8, .8, .2)),
                ),
                m(u(5), L.scale(5, 30, 5), P(.4, .2, .6, .5)),
                m(u(5, 0, 1.5), L.translate(0, 1).scale(4.5, .3, 4.5), P(.7, .5, .9, .2)),
                m(u(b), L.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), P(.5, .5, .5, .5)),
                m(u(6), L.translate(15, -1.5, 4).scale(3.5, 1, 3.5), P(.5, .5, .5, .5)),
              ),
            )),
            M(t => {
              t.h = () =>
                L.translate(
                  0,
                  .01 < $[3].g ? (5 * Math.cos(1.5 * O) + 2) * $[3].i * (1 - $[2].g) + -15 * (1 - $[3].g) : -500,
                  0,
                ),
                I(L.translate(0, 1.2)),
                g(u(5), L.translate(0, -.2).scale(5, 1, 5), P(.6, .65, .7, .3));
            }),
            I(L.translate(15, -2, 4)),
            t(.7, 12, 35),
            t(1, 8.2, 55),
            M(t => {
              t.h = () => L.translate(r() * Math.sin(O / 1.5 + 2) * 12),
                g(
                  d(p(
                    v(
                      m(u(b), L.scale(1.5, 1, 5), P(.9, .9, .9, .2)),
                      m(u(6), L.scale(4, 1, 5), P(.9, .9, .9, .2)),
                      m(u(b), L.translate(0, -2).scale(2, 3.2, 1.9), P(.3, .8, .5, .5)),
                      m(u(16, 1, 0, 4), L.scale(1, 1, 1.5).rotate(0, 90), P(.9, .9, .9, .2)),
                    ),
                    m(u(b), L.scale(1.3, 10, 1.3), P(.2, .7, .4, .6)),
                  )),
                  L.translate(0, 0, 45),
                ),
                A(L.translate(0, 2.8, 45), [0, 0, 4.5]);
            }),
            M(t => {
              t.h = () => L.translate(9.8 * (1 - r())),
                g(u(3), L.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), P(.3, .6, .6, .2)),
                g(u(8), L.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), P(.8, .8, .8, .2)),
                g(u(b), L.translate(-23, -3, 55).scale(5.2, 1.7, 3), P(.5, .5, .5, .3)),
                g(u(b), L.translate(-23, -2.2, 62).scale(3, 1, 4), P(.5, .5, .5, .3)),
                I(L.translate(-23, -.5, 66.5));
            }),
            g(u(b), L.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), P(.9, .9, .9, .2)),
            M(t => {
              t.h = () => L.translate(0, q(1 - 5 * r()) * f($[4].g, $[5].g) * Math.sin(1.35 * O) * 4),
                g(u(b), L.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), P(.7, .7, .7, .2)),
                g(
                  d(p(m(u(b), L.scale(3, 1.4, 2.7)), m(u(b), L.scale(1.2, 8, 1.2)))),
                  L.translate(-33, -3, 55),
                  P(.7, .7, .7, .2),
                );
            }),
            M(t => {
              t.h = () => L.translate(0, 0, q(1 - 5 * r()) * f($[4].g, $[5].g) * Math.sin(.9 * O) * 8),
                g(d(
                  p(
                    m(u(b), L.translate(-27, -3, 55).scale(3, 1.4, 2.7), P(.9, .9, .9, .2)),
                    m(u(b), L.translate(-27, -3, 55).scale(1, 3), P(.9, .9, .9, .2)),
                  ),
                )),
                g(u(b), L.translate(-39, -3, 55).scale(3, 1.4, 2.7), P(.9, .9, .9, .2));
            }),
            M(t => {
              t.h = () => L.translate(0, -6.5 * $[4].i),
                g(
                  u(6),
                  L.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9),
                  P(.7, .7, .7, .4),
                );
            }),
            [...m(
              d(v(
                m(u(b), L.translate(0, -3).scale(11, 1.4, 3), P(.9, .9, .9, .2)),
                p(
                  m(u(6), L.rotate(0, 0, 90).scale(6, 8, 6), P(.3, .6, .6, .3)),
                  m(u(4, 0, .01), L.translate(0, 6).scale(12, 2, .75).rotate(0, 45), P(.3, .6, .6, .3)),
                  m(u(6), L.rotate(0, 0, 90).scale(5, 12, 5), P(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(t =>
                    m(u(5), L.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), P(.3, .6, .6, .3))
                  ),
                ),
              )),
              L,
            )]),
          a =
            (g(e, L.translate(-53, 0, 55)),
              g(u(6), L.translate(-61.3, -2.4, 49).scale(3, 1, 5), P(.4, .6, .6, .3)),
              g(u(7), L.translate(-57, -2.6, 46).scale(4, 1, 4), P(.8, .8, .8, .3)),
              I(L.translate(-55, -1.1, 46).rotate(0, 90)),
              M(t => {
                t.h = () => L.translate(-75, (1 - $[5].i) * (1 - $[6].g) * 3, 55).rotate(180 * (1 - $[5].i) + z, 0),
                  g(e);
              }, 2),
              g(u(b), L.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), P(.7, .7, .7, .2)),
              g(u(3, 0, -.5), L.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), P(.8, .8, .8, .2)),
              g(
                d(p(
                  v(
                    m(u(b), L.translate(-100, -2.5, 55).scale(8, 1, 8), P(.8, .8, .8, .2)),
                    m(u(b), L.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), P(.8, .8, .8, .2)),
                    m(u(b), L.translate(-100, -2.6, 70).scale(3, 1.1, 7), P(.8, .8, .8, .2)),
                    m(u(b), L.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), P(.8, .8, .8, .2)),
                    m(u(6), L.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), P(.6, .6, .6, .3)),
                    m(u(b), L.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), P(.8, .8, .8, .2)),
                    m(u(b), L.translate(-100, .42, 92).scale(3, 1.1, 4.1), P(.8, .8, .8, .2)),
                  ),
                  m(u(8), L.translate(-100, -1, 55).scale(7, .9, 7), P(.3, .3, .3, .4)),
                  m(u(8), L.translate(-100, -2, 55).scale(4, .3, 4), P(.4, .4, .4, .5)),
                  m(u(8), L.translate(-100, -3, 55).scale(.6, 1, .6), P(.4, .4, .4, .5)),
                )),
                L,
              ),
              A(L.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              A(L.translate(-89, .2, 80), [0, 0, 6]),
              g(d(
                p(
                  m(u(b), L.translate(-100, 1, 63).scale(7.5, 4), P(.5, .5, .5, .4)),
                  m(u(b), L.translate(-100, 0, 70).scale(2, 2, 10), P(.5, .5, .5, .4)),
                  m(u(20, 1), L.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), P(.5, .5, .5, .4)),
                ),
              )),
              M(t => {
                t.h = () => L.translate(-99.7, 5.3 * -$[6].g - 2, 63.5), g(l);
              }),
              b.map(({ x: e, z: a }) => {
                g(u(6), L.translate(7 * e - 100, -3, 7 * a + 55).scale(1, 8.1), P(.6, .15, .15, .8)),
                  [4, -.4].map(t =>
                    g(u(6), L.translate(7 * e - 100, t, 7 * a + 55).scale(1.3, .5, 1.3), P(.4, .2, .2, .8))
                  );
              }),
              W(7, t => {
                g(
                  u((23 * t + 1) % 5 + 5, 0, .55),
                  L.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                    5 + t / 2,
                    1 + t / 6,
                    5 + t / 3,
                  ),
                  P(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                );
              }),
              g(u(b), L.translate(-87, -9.5, 24).scale(7, 1, 3), P(.4, .5, .6, .4)),
              g(u(4), L.translate(-86, -9.2, 27).scale(5, 1, 5), P(.5, .6, .7, .3)),
              g(u(12, 1), L.translate(-86, -9, 31).scale(1.5, 1, 1.5), P(.3, .3, .4, .1)),
              I(L.translate(-86, -7.5, 31)),
              M(t => {
                t.h = () => L.translate(0, 3.5 * (1 - X($[6].g, $[7].g)) + f($[7].i, $[6].i) * Math.sin(O) * 5),
                  [0, 12, 24].map(t =>
                    g(u(b), L.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), P(.2, .5, .6, .2))
                  );
              }),
              M(t => {
                t.h = () => {
                  let t = f($[7].i, $[6].i);
                  return L.translate(0, t * Math.sin(O + 3) * 6, 6 * Math.sin(.6 * O + t) * t);
                },
                  [6, 18].map(t =>
                    g(u(b), L.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), P(.1, .4, .5, .2))
                  );
              }),
              g(
                d(p(
                  v(
                    m(u(b), L.scale(11, 1, 13), P(.3, .4, .6, .3)),
                    m(u(5), L.translate(0, 0, -7).scale(2, 1.2, 2), P(.2, .4, .7, .3)),
                    m(u(5), L.scale(9, 1.2, 9), P(0, .2, .3, .5)),
                  ),
                  m(u(5), L.scale(5.4, 5, 5.4), P(0, .2, .3, .5)),
                )),
                L.translate(-38.9, -11.3, 17),
              ),
              I(L.translate(-38.9, -9.6, 10)),
              M(t => {
                t.h = () => L.translate(0, -7.3 * $[7].i),
                  g(
                    d(p(
                      v(
                        m(u(5), L.translate(0, 2).scale(5, 7, 5).skewY(8), P(.2, .4, .5, .5)),
                        m(u(5), L.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), P(.25, .35, .5, .5)),
                        m(u(5), L.translate(0, 9).scale(.6, 7, .6).skewY(8), P(.35, .3, .5, .5)),
                      ),
                      m(u(5), L.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), P(.2, .4, .5, .5)),
                    )),
                    L.translate(-38.9, -11.3, 17),
                  ),
                  A(
                    L.translate(-39.1, -.3, 17).rotate(0, 0, 10),
                    ...F(15).map(({ x: t, z: e }) => [3 * t, 3 * e, 1.2]),
                  );
              }),
              b.map(({ x: t, z: e }) => {
                o = L.translate(9 * t - 38.9, -7.3, 11 * e + 17),
                  g(u(14, 1), o.scale(1, 4), P(.25, .25, .25, 1)),
                  [1.5, 8].map(t => g(u(17, 1), o.translate(0, t - 4).scale(1.5, .5, 1.5), P(.6, .6, .6, .3)));
              }),
              g(
                d(p(
                  v(
                    m(u(6), L.translate(0, 0, -36).scale(15, 1.2, 15), P(.7, .7, .7, .3)),
                    m(u(b), L.translate(0, 0, -18).scale(4, 1.2, 6), P(.45, .4, .6, .3)),
                  ),
                  ...W(6, e =>
                    W(6, t =>
                      m(
                        u(6),
                        L.translate(4.6 * t - 12 + 2 * (1 & e), 0, 4.6 * e - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                        P(.7, .7, .7, .3),
                      ))).flat(),
                )),
                L.translate(-38.9, -11.3, 17),
              ),
              A(L.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              g(u(5), L.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), P(.8, .1, .25, .4)),
              I(L.translate(-84, -.5, 85).rotate(0, 45)),
              M(t => {
                t.h = () => n(-123, 1.4, 55 + -65 * ct), I(L.translate(0, -3, -4).rotate(0, 180)), g(i);
              }),
              A(L.translate(-115, .2, -12), [0, 0, 3.5]),
              d(p(
                m(u(b), L.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), P(.25, .25, .35, .3)),
                m(u(3), L.translate(0, 0, -5.5).scale(3, 2), P(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(t => m(u(b), L.translate(t, -.5, 1).scale(.14, .3, 6.5), P(.7, .2, 0, .3))),
              ))),
          s = (M(t => {
            t.h = () => {
              let t = Math.sin(1.1 * O);
              return L.translate.call(L, 0, -2, f($[10].g, $[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
            }, W(2, t => g(a, L.translate(9 * t - 110 + (1 & t), 1.7, -12)));
          }),
            M(t => {
              t.h = () => {
                let t = Math.sin(2.1 * O);
                return L.translate.call(L, 0, -2, f($[10].g, $[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
              }, W(2, t => g(a, L.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
            }),
            M(t => {
              t.h = () => {
                let t = Math.sin(1.5 * O);
                return L.translate.call(
                  L,
                  0,
                  -2,
                  -8.5 * X((1 - $[10].g) * (1 - f($[10].g, $[11].g)), f($[10].g, $[11].g) * (t < 0 ? -t : t)) + 10,
                );
              }, W(3, t => g(a, L.translate(9 * t - 106, 1.7, -12)));
            }),
            g(
              d(p(
                v(
                  m(u(b), L.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                  m(u(b), L.translate(26.5, -.6, 10).scale(17, 2, .5)),
                ),
                ...W(4, t => m(u(b), L.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                ...W(3, t => m(u(b), L.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
              )),
              L.translate(-123, 0, -12),
              P(.5, .5, .6, .2),
            ),
            g(u(5), L.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), P(.25, .25, .35, 1)),
            g(u(b), L.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), P(.8, .8, .8, .2)),
            g(u(6), L.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), P(.6, .5, .7, .2)),
            I(L.translate(-116, -1.4, -18).rotate(0, 180)),
            W(3, t => {
              g(h, L.translate(12 * t - 109, -9, -12), P(.6, .6, .6, .3)),
                g(h, L.translate(-77, -9, -12 * t - 20).rotate(0, 90), P(.6, .6, .6, .3));
            }),
            g(d(
              p(
                m(u(12), L.translate(-77, -13.9, -12).scale(4, 18.2, 4), P(.7, .7, .7, .2)),
                m(u(b), L.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), P(.4, .5, .6, .2)),
                m(u(b), L.translate(-77, 0, -14).scale(1.5, 2.2, 2), P(.4, .5, .6, .2)),
                m(u(12), L.translate(-77, 2.8, -12).scale(3, 5, 3), P(.4, .5, .6, .2)),
              ),
            )),
            g(u(b), L.translate(-115.5, -17, -12).scale(.5, 15, 2.2), P(.6, .6, .6, .3)),
            g(u(b), L.translate(-77, -17, -50.5).scale(2.2, 15, .5), P(.6, .6, .6, .3)),
            g(u(b), L.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), P(.6, .6, .6, .3)),
            g(d(
              p(
                m(u(b), L.translate(-93, -5.8, -40).scale(9, 1, 5), P(.8, .8, .8, .1)),
                m(u(9), L.translate(-98, -5.8, -40).scale(3, 8, 3), P(.7, .7, .7, .2)),
              ),
            )),
            g(u(9), L.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), P(.5, .5, .5, .3)),
            I(L.translate(-98, -4.4, -40).rotate(0, 90)),
            A(L.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
            g(d(
              p(
                v(
                  m(u(6, 0, 0, .6), L.translate(-100, .7, 105.5).scale(8, 1, 11), P(.7, .7, .7, .2)),
                  m(u(b), L.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), P(.7, .7, .7, .2)),
                  m(u(b), L.translate(-91.2, .7, 107).scale(3, 1, 3.3), P(.7, .7, .7, .2)),
                ),
                m(u(5), L.translate(-100, .7, 113).scale(4, 3, 4), P(.7, .7, .7, .2)),
              ),
            )),
            W(4, e =>
              M(t => {
                t.h = () => {
                  let t = f($[8].i, $[12].i);
                  return L.translate(
                    (2 < e ? 2 * (1 - t) + t : 0) - 100,
                    t * Math.sin(1.3 * O + 1.7 * e) * (3 + e / 3) + .7,
                    115 + (1 & e ? -1 : 1) * (1 - $[8].i) * (1 - $[12].i) * -7
                      + (t < .05 ? .05 : t) * Math.cos(1.3 * O + 7 * e) * (4 - 2 * (1 - e / 3)),
                  );
                },
                  g(
                    u(6),
                    L.translate(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.3, -21.5).scale(2.6, 1, 2.5),
                    P(.5 - e / 8, e / 12 + .5, .7, .3),
                  );
              })),
            M(t => {
              t.h = () => {
                let t = f($[8].i, $[12].i);
                return L.translate(2.5 * (1 - t) - 139.7, -3 * (1 - $[8].g) + t * Math.sin(.8 * O) * -1 - 1.8, 93.5)
                  .rotateSelf(Math.cos(1.3 * O) * (3 * t + 3), 0);
              },
                g(d(
                  p(m(u(10), L.scale(6, 2, 6), P(.1, .6, .5, .3)), m(u(10), L.scale(3.3, 6, 3.3), P(.1, .6, .5, .5))),
                )),
                o = L.translate(-7.5).rotate(0, 90),
                g(u(15, 1), o.scale(3, 2.3, 3), P(.4, .4, .4, .3)),
                g(u(10), o.scale(2, 2.5, 2), P(.3, .8, .7, .3)),
                g(u(5), o.scale(1, 3), P(.5, .5, .5, .5)),
                I(o.translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(t =>
                  g(c, L.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), P(1, 1, .8, .2))
                ),
                A(L.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(e => {
              g(u(12, 1), L.translate(-7.5 * e - 100, 3.7, 96).scale(.8, 4, .8), P(.6, .24, .2, .5)),
                [7.2, 1.5].map(t =>
                  g(u(15, 1), L.translate(-7.5 * e - 100, t + .7, 96).scale(1.1, .5, 1.1), P(.5, .24, .2, .4))
                ),
                g(c, L.translate(-5 * e - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * e - 90), P(1, 1, .8)),
                g(
                  d(p(
                    m(u(b), L.translate(-4 * e, 3.5, -.5).scale(4, 4, .7), P(.5, .5, .5, .4)),
                    m(u(b), L.scale(3, 3, 10), P(.6, .24, .2, .5)),
                    m(u(28, 1), L.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), P(.6, .24, .2, .5)),
                    m(u(5), L.translate(-5.3 * e, 7).rotate(90, 0).scale(1.7, 5, 1.7), P(.6, .24, .2, .5)),
                    m(u(5), L.translate(-5.3 * e, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), P(.6, .24, .2, .5)),
                  )),
                  L.translate(e - 100, .7, 97),
                );
            }),
            M(t => {
              t.h = () => L.translate(-100, .6 - 6 * $[12].g, 96.5).scale(.88, 1.2), g(l);
            }),
            [
              ...m(u(25, 1), L.scale(8, 1, 8), P(.45, .45, .45, .2)),
              ...m(u(5), L.translate(0, 1).scale(1, .2), P(.3, .3, .3, .2)),
            ]);
        M(t => {
          t.h = () => L.translate(-80, 1, 106).rotate(0, 40 + y),
            g(d(
              p(
                m(u(25, 1), L.scale(8, 1, 8), P(.45, .45, .45, .2)),
                m(u(b), L.translate(0, 0, -5.5).scale(1.5, 3, 2.5), P(.45, .45, .45, .2)),
              ),
            )),
            g(u(8), L.translate(0, 2).scale(3, 1.5, 3), P(.7, .7, .7, .1)),
            g(u(5), L.translate(0, 2).scale(1, 2), P(.3, .3, .3, .2)),
            A(L.translate(0, 3), ...F(10).map(({ x: t, z: e }) => [5.6 * t, 5.6 * e, 2.5]));
        }),
          M(t => {
            t.h = () => L.translate(-64, 1, 106).rotate(0, Y),
              g(d(
                p(
                  m(u(25, 1), L.translate(0, 2).scale(8, 1, 8), P(.35, 0, 0, .3)),
                  m(u(b), L.scale(9, 5, 2), P(.3, 0, 0, .3)),
                ),
              )),
              g(s),
              [-1, 1].map(t =>
                g(c, L.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), P(1, 1, .8))
              );
          }),
          M(t => {
            t.h = () => L.translate(-48, 1, 106).rotate(0, 180 - Y),
              g(d(
                p(
                  m(u(25, 1), L.translate(0, 2).scale(8, 1, 8), P(.35, 0, 0, .3)),
                  m(u(b), L.translate(7).scale(9, 5, 2), P(.3, 0, 0, .3)),
                  m(u(b), L.translate(0, 0, 7).scale(2, 5, 9), P(.3, 0, 0, .3)),
                ),
              )),
              g(s);
          }),
          M(t => {
            t.h = () => L.translate(-48, 1, 90).rotate(0, 270 + Y),
              g(d(
                p(
                  m(u(25, 1), L.translate(0, 2).scale(8, 1, 8), P(.35, 0, 0, .3)),
                  m(u(b), L.translate(7).scale(9, 5, 2), P(.3, 0, 0, .3)),
                  m(u(b), L.translate(0, 0, -7).scale(2, 5, 9), P(.3, 0, 0, .3)),
                ),
              )),
              g(s);
          }),
          g(u(b), L.translate(-56, 1, 106).scale(.7, .8, 2.5), P(.7, .7, .7, .2)),
          g(u(b), L.translate(-48, 1, 98).scale(2.5, .8, .7), P(.7, .7, .7, .2)),
          g(u(b), L.translate(-39, .4, 90).scale(2, 1, 2), P(.7, .7, .7, .3)),
          g(u(b), L.translate(-34.2, .4, 90).scale(3, 1, 3), P(.7, .7, .7, .3)),
          I(L.translate(-34, 2.7, 96).rotate(-12, 0)),
          g(u(5), L.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), P(.2, .5, .5, .6)),
          [P(.1, .55, .45, .2), P(.2, .5, .5, .3), P(.3, .45, .55, .4)].map((e, a) =>
            M(t => {
              t.h = () =>
                L.translate(
                  0,
                  (1 - $[13].i) * (1 - $[14].i) * (a ? 0 : 3) + f($[13].i, $[14].i) * Math.sin(1.5 * O + 1.5 * a) * 4,
                ),
                g(u(b), L.translate(-23.5, .5, 90 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), e),
                2 === a && g(u(b), L.translate(-29.1, .4, 90).scale(2.1, 1, 3), P(.7, .7, .7, .3)),
                1 === a
                && g(
                  u(b),
                  L.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1),
                  P(.6, .6, .7, .3),
                );
            })
          ),
          g(d(
            p(
              m(u(6, 0, 0, .3), L.translate(0, -.92, 95).scale(14, 2, 14), P(.8, .8, .8, .2)),
              m(u(5), L.translate(0, 0, 95).scale3d(6), P(.3, .3, .3, .5)),
            ),
          )),
          [8, -6.1].map((e, a) =>
            W(3, t =>
              g(
                h,
                L.translate(6 * t - 6, e - (1 & t), 111 - .2 * (1 & t) - a),
                1 & t ? P(.5, .5, .5, .3) : P(.35, .35, .35, .5),
              ))
          ),
          [-1, 1].map(t => g(c, L.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), P(1, 1, .8))),
          I(L.translate(0, 1.7, 82).rotate(0, 180)),
          g(u(5), L.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), P(.5, .3, .3, .4)),
          g(d(
            p(
              v(
                m(u(b), L.translate(0, 16, 110.5).scale(12, 1, 3), P(.5, .3, .3, .4)),
                m(u(b), L.translate(0, 16, 111).scale(3, 1, 3.8), P(.5, .3, .3, .4)),
              ),
              m(u(5), L.translate(0, 16, 103.5).scale(5.5, 5, 5.5), P(.5, .3, .3, .4)),
            ),
          )),
          M(t => {
            t.h = () => {
              let t = Math.sin(O);
              return L.translate(-2 * t).rotate(0, 0, 25 * t);
            },
              g(u(3), L.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), P(.5, .3, .3, .4)),
              [22, 30].map(t => {
                g(u(6), L.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), P(.7, .7, .7, .4)),
                  g(u(b), L.translate(0, 6.2, t + 95).scale(.5, 11, .5), P(.5, .3, .3, .4));
              });
          }),
          g(u(6), L.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), P(.5, .6, .7, .3)),
          g(u(b), L.translate(0, 16, 129).scale(1.5, 1, 2), P(.5, .6, .7, .3)),
          g(u(7), L.translate(0, 16.2, 133).scale(5, 1, 5), P(.4, .5, .6, .4)),
          M(t => {
            t.h = () => {
              let t = f(f(($[14].g + $[14].i) / 2, $[13].i), ($[15].g + $[15].i) / 2);
              return L.translate(0, 16 * t, 8.5 * q(2 * t - 1) + 95);
            },
              g(u(5), L.scale(5, 1.1, 5), P(.5, .3, .3, .4)),
              g(u(5), L.scale(5.5, .9, 5.5), P(.25, .25, .25, .4)),
              I(L.translate(0, 1.5, -1).rotate(0, 180));
          }),
          A(L.translate(0, 3, 95), ...F(9).map(({ x: t, z: e }) => [9 * t, 9 * e, 4])),
          A(L.translate(0, 19, 134), [0, 0, 3.5]);
      }),
      Ct = [
        M(() => {
          [0, 180].map(t => g(c, L.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), P(1, 1, .8))),
            g(D(20), L.translate(0, 1).scale(.5, .5, .5), P(1, .3, .4));
          let e = m(
            d(p(u(15, 1), m(u(b), L.translate(0, 0, 1).scale(2, 2, .5)))),
            L.rotate(-90, 0).scale(.1, .05, .1),
            P(.3, .3, .3),
          );
          [-1, 1].map(t => g(e, L.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
            g(u(b), L.translate(0, .9, .45).scale(.15, .02, .06), P(.3, .3, .3)),
            g(D(20), L.scale(.7, .8, .55), P(1, .3, .4));
        }),
        ...[-1, 1].map(t =>
          M(() => {
            g(u(10, 1), L.translate(.3 * t, -.8).scale(.2, .7, .24), P(1, .3, .4));
          })
        ),
      ],
      Tt = M(() => {
        g(u(6, 1), L.scale(.13, 1.4, .13), P(.3, .3, .5, .1)),
          g(u(8, 1), L.translate(0, 1).scale(.21, .3, .21), P(1, .5, .2)),
          g(u(3), L.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), P(.2, .2, .2, .1));
      }, 0),
      jt = M(() => {
        g(u(6).slice(0, -1), L.scale(.77, 1, .77), P(1, .3, .5));
      }, 0),
      kt = M(() => {
        g(
          D(30, 24, (t, e, a) => {
            let l = e / 24, r = t * Math.PI * 2 / 30, s = l ** .6 * Math.PI / 2;
            return t = l * l * Math.sin(t * Math.PI * 14 / 30) / 4,
              23 === e
                ? { x: a.D = 0, y: -.5, z: 0 }
                : {
                  x: Math.cos(r) * Math.sin(s),
                  y: Math.cos(l * Math.PI) - l - t,
                  z: Math.sin(r) * Math.sin(s) + Math.sin(t * Math.PI * 2) / 4,
                };
          }),
          L.scale3d(.7),
          P(1, 1, 1),
        ), [-1, 1].map(t => g(D(12), L.translate(.16 * t, .4, -.36).scale3d(.09)));
      }, 0);
  });
})();
