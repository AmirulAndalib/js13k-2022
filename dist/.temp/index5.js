let I,
  A,
  $,
  k,
  F,
  j,
  Y,
  D,
  T,
  r,
  e1,
  t1,
  a1,
  l1,
  x,
  y = 0,
  r1 = 0,
  s1 = 0,
  z = 0,
  O = 0,
  o1 = 0,
  c1 = 0,
  w = 0,
  n1 = 0,
  i1 = 0,
  Q = 0,
  C = 1,
  B = 180,
  H = .066,
  f1 = [],
  P = [],
  X = [],
  m1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  R = { x: 0, y: 0, z: 0 },
  q = e => e < 0 ? -e : e,
  h1 = (e, t) => e < t ? e : t,
  L = (e, t) => t < e ? e : t,
  u1 = (e, t) => q(e) > t ? e : 0,
  N = (e, t = 0, a = 1) => e < t ? t : a < e ? a : e,
  x1 = e => N1(_(e * J), G(e * J)) / J,
  y1 = (e, t, a) => e + (2 * (t = (t - e) % 360) % 360 - t) * N(a) || 0,
  E = (e, t, a) => (0 < a ? a < 1 ? e + (t - e) * a : t : e) || 0,
  g1 = (e, t) => (e = N(e), E(e, 1 - e, t)),
  p = (
    e,
    t = l,
    a = 0,
  ) => (a *= 16,
    t[a++] = e.m11,
    t[a++] = e.m12,
    t[a++] = e.m13,
    t[a++] = e.m14,
    t[a++] = e.m21,
    t[a++] = e.m22,
    t[a++] = e.m23,
    t[a++] = e.m24,
    t[a++] = e.m31,
    t[a++] = e.m32,
    t[a++] = e.m33,
    t[a++] = e.m34,
    t[a++] = e.m41,
    t[a++] = e.m42,
    t[a++] = e.m43,
    t[a] = e.m44,
    t),
  U = (
    e = X1,
    t = K,
  ) => (t.m11 = e.m11,
    t.m12 = e.m12,
    t.m13 = e.m13,
    t.m14 = e.m14,
    t.m21 = e.m21,
    t.m22 = e.m22,
    t.m23 = e.m23,
    t.m24 = e.m24,
    t.m31 = e.m31,
    t.m32 = e.m32,
    t.m33 = e.m33,
    t.m34 = e.m34,
    t.m41 = e.m41,
    t.m42 = e.m42,
    t.m43 = e.m43,
    t.m44 = e.m44,
    t),
  c = (e, t, a) => X1.translate(e, t, a),
  v1 = (e, t, a) => X1.rotate(e, t, a),
  n = (e, t, a) => X1.scale(e, t, a),
  h = (e, a) => Array.from(Array(e), (e, t) => a(t)),
  m = (e, t, a) => (e.C = a, e.u = t, e),
  s = (e, l, t = e.u) =>
    m(
      e.map(e => {
        let t, a;
        return { x: e, y: t, z: a } = e,
          { x: e, y: t, z: a } = l.transformPoint({ x: e, y: t, z: a }),
          { x: e, y: t, z: a };
      }),
      t,
      e.C,
    ),
  i = (e, t, a) => e.map(e => s(e, t, a)),
  z1 = (a, l = 0) =>
    h(a, e => {
      let t = G(2 * V * e / a);
      return { x: _(2 * V * e / a), y: 0, z: q(t) < .01 ? t : t < 0 ? t - l : t + l };
    }),
  d1 = (l, r, s) =>
    l.map((e, t, { length: a }) => m([e, r[a - t - 1], r[a - (t + 1) % a - 1], l[(t + 1) % a]], l.u, s)),
  f = (
    e,
    t,
    a = 0,
    l,
  ) => (e = e ? z1(e, l) : m1,
    l = s(e, c(0, 1).scale3d(0 < a ? a : 1)),
    e = s(e, c(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...d1(e, l, t), l, e]),
  a = (l, r = l, s = (e, t) => (t *= V / r, { x: G(e *= 2 * V / l) * _(t), y: G(t), z: _(e) * _(t) })) => {
    let o = [];
    for (let a = 0; l > a; a++) {
      for (let t = 0; r > t; t++) {
        let e = m([], 0, 1);
        o.push(e),
          e.push(s(a, t, e)),
          t && e.push(s((a + 1) % l, t, e)),
          r - 1 > t && e.push(s((a + 1) % l, t + 1 % r, e)),
          e.push(s(a, t + 1 % r, e));
      }
    }
    return o;
  },
  p1 = ({ x: e, y: t, z: a }, l) => e * l.x + t * l.y + a * l.z,
  w1 = e => {
    let t, a = 0, l = 0, r = 0, s = e.at(-1);
    for (t of e) a += (s.y - t.y) * (s.z + t.z), l += (s.z - t.z) * (s.x + t.x), r += (s.x - t.x) * (s.y + t.y), s = t;
    return t = E1(a, l, r), a /= t, l /= t, r /= t, { x: a, y: l, z: r, w: a * s.x + l * s.y + r * s.z };
  },
  S1 = (l, r) => {
    let s, o, c, n = r.B;
    for (let e = 0; n.length > e; ++e) {
      if ((s = p1(l, n[e]) - l.w) < -8e-5 ? c = r : 8e-5 < s && (o = r), c && o) {
        o = [], c = [], n = r.B, e = r.v;
        let t = n.at(-1), a = p1(l, t) - l.w;
        for (let e of n) {
          s = p1(l, e) - l.w,
            a < 8e-5 && c.push(t),
            -8e-5 < a && o.push(t),
            (8e-5 < a && s < -8e-5 || a < -8e-5 && 8e-5 < s)
            && (a /= s - a,
              t = { x: t.x + (t.x - e.x) * a, y: t.y + (t.y - e.y) * a, z: t.z + (t.z - e.z) * a },
              o.push(t),
              c.push(t)),
            t = e,
            a = s;
        }
        return {
          l: 2 < o.length && { B: m(o, n.u, n.C), v: e, A: r },
          j: 2 < c.length && { B: m(c, n.u, n.C), v: e, A: r },
        };
      }
    }
    return { l: o, j: c };
  },
  o = (e, t, a = w1(t.B)) => {
    let l, r, s;
    return e
      ? ({ l, j: r } = S1(e, t), l || r || e.o.push(t), l && (e.l = o(e.l, l, a)), r && (e.j = o(e.j, r, a)))
      : ({ x: l, y: r, z: a, w: s } = a, e = { x: l, y: r, z: a, w: s, o: [t], l: 0, j: 0 }),
      e;
  },
  A1 = (t, r, s) => {
    let o = [],
      c = (e, t) => {
        let { l: a, j: l } = S1(e, t);
        a || l || (0 < s * p1(e, r) ? a = t : l = t), a && (e.l ? c(e.l, a) : o.push(a)), l && e.j && c(e.j, l);
      };
    for (let e of r.o) c(t, e);
    return o;
  },
  M1 = (e, t) => e && (t(e), M1(e.l, t), M1(e.j, t)),
  I1 = e => (M1(e, t => {
    let e = t.j;
    t.j = t.l, t.l = e, t.x *= -1, t.y *= -1, t.z *= -1, t.w *= -1;
    for (let e of t.o) e.v = !e.v;
  }),
    e),
  k1 = e => e.length ? e.reduce((e, t) => o(e, { B: t, v: 0, A: 0 }), 0) : e,
  u = (...e) =>
    e.reduce((l, t) => {
      let r = [];
      if (l = k1(l), t) {
        t = k1(t), M1(l, e => e.o = A1(t, e, 1)), M1(t, e => r.push([e, A1(l, e, -1)]));
        for (let [t, a] of r) for (let e of a) o(l, e, t);
      }
      return l;
    }),
  g = (e, ...t) => {
    let a = e => {
        let t;
        return e.A && ((t = l.get(e.A)) ? (r.delete(t), e = a(e.A)) : l.set(e.A, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = I1(u(I1(k1(e)), ...t)),
      M1(e, t => {
        for (let e of t.o) r.set(a(e), e.v);
      }),
      Array.from(r, ([{ B: e }, t]) => {
        let a = e.map(({ x: e, y: t, z: a }) => ({ x: e, y: t, z: a }));
        return m(t ? a.reverse() : a, e.u, e.C);
      });
  },
  W = (e, t, a) => E(e, t, 1 - U1(-a * H)),
  F1 = () => {
    h3.innerHTML = "Souls: "
      + [
        0,
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
        "XIII",
      ][s1 = f1.reduce((e, { i: t }) => e + t, 0)] + " / XIII";
  },
  Y1 = () => {
    localStorage.DanteSP22 = JSON.stringify([P.map(({ i: e }) => e), f1.map(({ i: e }) => e), O, y, k]);
  },
  D1 = (e, t, a, l) =>
    new DOMMatrix([a, 0, 0, 0, 0, l, 0, 0, 0, 0, (t + e) / (e - t), -1, 0, 0, 2 * t * e / (e - t), 0]),
  v = (e, t, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * t << 8 | 255 * e,
  d = (e, t = new DOMMatrix(), a) => r.o.push(...i(e, t, a)),
  b = (e, t = 1) => {
    let a = r;
    X.push(r = { m: new DOMMatrix(), G: t, o: [] }), e(), r = a;
  },
  C1 = e => (e = e.transformPoint(), E1(R.x - e.x, R.y - e.y, R.z - e.z)),
  S = e => {
    let t = r,
      a = P.length,
      l = {
        i: 0,
        g: 0,
        h: 0,
        m: t.m,
        H: e,
        F() {
          l.g = W(l.g, l.i, 4),
            l.h = W(l.h, l.i, 1),
            U(t.m).multiplySelf(e),
            F && C1(K) < 3 && (l.g < .3 || .7 < l.g)
            && (l.i = l.i ? 0 : 1, a && 1 / 0 > C && (C = y + 1, h4.innerHTML = "* click *"), O = a, Y1()),
            !a && l.i && .8 < l.g && (l.i = 0,
              s1 < 13
                ? 1 / 0 > C && (C = y + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
                : z
                  || (1 / 0 > C
                    && (C = y + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                    z = 1)),
            K.rotateSelf(60 * l.g - 30, 0).translateSelf(0, 1);
        },
      };
    P.push(l),
      d(f(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), v(.4, .5, .5)),
      d(f(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), v(.4, .5, .5)),
      d(f(), e.translate(0, -.4).scale(.5, .1, .5), v(.5, .5, .4));
  },
  M = (f, ...e) => {
    let m,
      h,
      u,
      g = -1,
      v = 0,
      d = 0,
      p = 1,
      b = 3,
      S = {
        i: 0,
        F() {
          if (!S.i) {
            let e, t, a, l, r, s, o, c, n = 1, i = 1 / 0;
            for (let l of A) {
              let { x: e, z: t, w: a } = l;
              t = (e = E1(I - e, k - t)) - a, c ||= e < a, 0 < t && i > t && (i = t, M = l), n = h1(n, e / a);
            }
            c
            || ({ x: e, z: t, w: a } = M,
              l = I - e,
              r = k - t,
              s = E1(l, r),
              o = N1(-r, l),
              p && (d = (W1() - .5) * V / 2, b = N(b / (1 + W1()))),
              o += d,
              g = -G(o),
              v = _(o),
              .1 < s && (s = h1(s, a) / (s || 1), I = l * s + e, k = r * s + t)),
              p = c,
              b = W(b, 6 * (1 - n) + 3, n + 3),
              F = W(F, I = W(I, I + g, b), b),
              Y = W(Y, k = W(k, k + v, b), b),
              m = y1(m, N1(F - h, Y - u) / J - 180, 1 - U1(-3 * H)),
              C1(U(D).multiplySelf(f).translateSelf(h = F, 0, u = Y).rotateSelf(0, m, 7 * _(1.7 * y))) < 1.6
              && (S.i = 1,
                e = [
                  ,
                  "Mark Zuckemberg<br>made the world worse",
                  "Giorgia Meloni<br>fascist",
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
                ][s1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > C && (C = y + (s1 && s1 < 12 ? 5 : 7), h4.innerHTML = e),
                F1(),
                Y1());
          }
          S.i
            && U(X[2].m).translateSelf(
              t % 4 * 1.2 - 1.7 + _(y + t) / 7,
              -2,
              1.7 * (t / 4 | 0) - 5.5 + q(t % 4 - 2) + G(y / 1.5 + t) / 6,
            );
        },
      },
      A = e.map(([e, t, a]) => ({ x: e, z: t, w: a })),
      M = A[0],
      { x: I, z: k } = M,
      F = I,
      Y = k,
      D = r.m,
      t = f1.length;
    f1.push(S);
  },
  T1 = (e, t, a, l) => {
    e.translateSelf(t + _(y + 2) / 5, a + _(.8 * y) / 3, l).rotateSelf(2 * _(y), _(.7 * y), _(.9 * y));
  },
  j1 = (e, t = 35633) => (t = Z.c6x(t), Z.s3c(t, e), Z.c6a(t), t),
  O1 = (e, t) => {
    let a = {}, l = Z.c1h();
    return Z.abz(l, e), Z.abz(l, j1(t, 35632)), Z.l8l(l), e => e ? a[e] || (a[e] = Z.gan(l, e)) : Z.u7y(l);
  },
  Q1 = (e, t, a) => {
    A
      ? (U().rotateSelf(0, 40 * _(r1) - 70),
        p(K, R1, 37),
        p(K, R1, 38),
        p(K, R1, 39),
        Z.uae(e, !1, R1),
        Z.d97(4, X[39].D - X[37].s, 5123, 2 * X[37].s))
      : (Z.uae(e, !1, R1),
        Z.d97(4, (t ? X[39].D : X[37].s) - 3, 5123, 6),
        Z.uae(e, !1, q1),
        Z.das(4, X[a].D - X[a].s, 5123, 2 * X[a].s, f1.length),
        Z.das(4, X[42].D - X[42].s, 5123, 2 * X[42].s, P.length));
  },
  B1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  H1 = e => _(e * V * 2),
  P1 = new AudioContext(),
  X1 = new DOMMatrix(),
  K = new DOMMatrix(),
  l = new Float32Array(16),
  R1 = new Float32Array(624),
  q1 = new Float32Array(624),
  L1 = new Uint8Array(65536),
  { PI: V, atan2: N1, sin: _, cos: G, hypot: E1, exp: U1, random: W1 } = Math,
  J = V / 180,
  t = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  K1 = P1.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in Z) Z[e[0] + [...e].reduce((e, t, a) => (e * a + t.charCodeAt(0)) % 434, 0).toString(36)] = Z[e];
B1(() => {
  let e = 0,
    l = () => {
      if (2 == ++e) {
        let u = [new Float32Array(16), new Float32Array(16)],
          e = a => {
            if (
              Z.f1s(),
                requestAnimationFrame(e),
                r1 += l = (a - (I || a)) / 1e3,
                y += H = A ? 0 : h1(.066, l),
                I = a,
                0 < H
            ) {
              let e = 1, t = () => U(X1, X[++e].m);
              for (
                Y(),
                  C && y > C && (C = 0, h4.innerHTML = ""),
                  k = W(k, P[9].h, .2 + .3 * q(2 * P[9].h - 1)),
                  $ = W($, z ? W($, -9, 1.5) : N(y / 3), 1),
                  e1 = g1(P[12].g, P[13].g),
                  l1 = E(W(l1, 0, 1), x1(l1 + 60 * H), P[5].g - P[6].h),
                  t1 = E(W(t1, 0, 5), x1(t1 + 56 * H), e1),
                  a1 = E(W(a1, 0, 4), x1(a1 + 48 * H), e1),
                  T1(t(), -12, 4.2, 40 * $ - 66),
                  t().translateSelf(0, 0, -15).scaleSelf(1, N(1.22 - P[1].g), 1),
                  t().translateSelf(0, 0, 15).scaleSelf(1, N(1.22 - P[2].g), 1),
                  t().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, N(1.1 - P[6].g), 1),
                  t().translateSelf(-100, .6, 96.5).scaleSelf(.88, 1.2 - P[12].g),
                  t().translateSelf(
                    0,
                    P[3].g < .01 ? -500 : (1 - P[2].g) * P[3].h * (5 * G(1.5 * y) + 2) + 15 * (P[3].g - 1),
                    0,
                  ),
                  l = h1(P[2].h, 1 - P[4].h),
                  t().translateSelf(l * _(.7 * y + 2) * 12),
                  t().translateSelf(l * _(y + 3) * 8.2),
                  t().translateSelf(l * _(y / 1.5 + 2) * 12),
                  t().translateSelf(9.8 * (1 - l)),
                  a = N(1 - 5 * l) * g1(P[4].g, P[5].g),
                  t().translateSelf(0, a * _(1.35 * y) * 4),
                  t().translateSelf(0, 0, a * _(.9 * y) * 8),
                  t().translateSelf(0, -6.5 * P[4].h),
                  t().translateSelf(-75, (1 - P[5].h) * (1 - P[6].g) * 3, 55).rotateSelf(180 * (1 - P[5].h) + l1, 0),
                  l = g1(P[7].h, P[6].h),
                  t().translateSelf(0, l * _(y) * 5 + 3.5 * (1 - L(P[6].g, P[7].g))),
                  t().translateSelf(0, l * _(y + 3) * 6, l * _(.6 * y + 1) * 6),
                  t().translateSelf(0, -7.3 * P[7].h),
                  T1(t(), -123, 1.4, 55 + -65 * k),
                  a = g1(P[10].g, P[11].g),
                  t().translateSelf(0, -2, a * q(_(1.1 * y)) * -8.5 + 10),
                  t().translateSelf(0, -2, a * q(_(2.1 * y)) * -8.5 + 10),
                  t().translateSelf(0, -2, -8.5 * L((1 - P[10].g) * (1 - a), a * q(_(1.5 * y))) + 10),
                  a = g1(P[8].h, P[12].h),
                  l = 0;
                l < 4;
                l++
              ) {
                t().translateSelf(
                  (2 < l ? 2 * (1 - a) + a : 0) - 100,
                  a * _(1.3 * y + 1.7 * l) * (3 + l / 3) + .7,
                  115 + (1 & l ? -1 : 1) * (1 - P[8].h) * (1 - P[12].h) * -7
                    + L(a, .05) * G(1.3 * y + 7 * l) * (4 - 2 * (1 - l / 3)),
                );
              }
              for (
                t().translateSelf(2.5 * (1 - a) - 139.7, -3 * (1 - P[8].g) + a * _(.8 * y) * -1 - 1.8, 93.5).rotateSelf(
                  G(1.3 * y) * (3 * a + 3),
                  0,
                ),
                  t().translateSelf(-81, .6, 106).rotateSelf(0, 40 + t1),
                  t().translateSelf(-65.8, .8, 106).rotateSelf(0, a1),
                  t().translateSelf(-50.7, .8, 106).rotateSelf(0, 180 - a1),
                  t().translateSelf(-50.7, .8, 91).rotateSelf(0, 270 + a1),
                  a = g1(P[13].h, P[14].h),
                  l = 0;
                l < 3;
                ++l
              ) {
                t().translateSelf(0, (1 - P[13].h) * (1 - P[14].h) * (l ? 0 : 3) + a * _(1.5 * y + 1.5 * l) * 4);
              }
              for (
                t().translateSelf(-2 * _(y)).rotateSelf(25 * _(y)),
                  l = g1(g1((P[14].g + P[14].h) / 2, P[13].h), (P[15].g + P[15].h) / 2),
                  t().translateSelf(0, 16 * l, 8.5 * N(2 * l - 1) + 95),
                  a = 0;
                a < 13;
                ++a
              ) {
                f1[a].F(), p(K, q1, a);
              }
              for (a = 0; a < 16; ++a) P[a].F(), p(K, q1, a + 13), q1[16 * a + 223] = 1 - P[a].g;
              for (x(t), t = 0; e >= t; ++t) p(X[t].m, R1, t - 1);
              o(), Z.b6o(36160, f), Z.v5y(0, 0, 128, 128), Z.c4s(16640), Z.cbf(!0, !1, !0, !1);
              var { x: a, y: l, z: r } = R;
              Z.uae(o("b"), !1, p(U().rotateSelf(0, 180).invertSelf().translateSelf(-a, -l, .3 - r))),
                Q1(o("c"), 0, 40),
                Z.c4s(256),
                Z.cbf(!1, !0, !1, !0),
                Z.uae(o("b"), !1, p(U().translateSelf(-a, -l, -r - .3))),
                Q1(o("c"), 0, 40),
                Z.f1s();
            }
            F = 0,
              U(X1, g),
              A
                ? g.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
                : g.rotateSelf(-Q, -B).invertSelf().translateSelf(-w, -n1, -i1),
              v(),
              Z.b6o(36160, i),
              Z.v5y(0, 0, 2048, 2048),
              n[0](54.7 * 1.1),
              n[1](126 * 1.1),
              c(),
              Z.b6o(36160, null),
              Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight),
              Z.cbf(!0, !0, !0, !0),
              Z.c4s(16640),
              Z.uae(c("a"), !1, p(D)),
              Z.uae(c("b"), !1, p(g)),
              Z.uae(c("i"), !1, u[0]),
              Z.uae(c("j"), !1, u[1]),
              Z.ubu(c("k"), w, n1, i1),
              Q1(c("c"), !j, 41),
              s(),
              Z.ubu(s("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, r1),
              Z.ubu(s("k"), w, n1, i1),
              Z.uae(s("b"), !1, p(U(g).invertSelf())),
              Z.d97(4, 3, 5123, 0),
              Z.b6o(36160, f),
              Z.f1s();
          },
          g = new DOMMatrix(),
          a = new DOMMatrix(),
          t = m,
          l = j1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          v = O1(
            j1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          s = O1(
            j1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          o = O1(
            l,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=1.-sin(gl_FragCoord.x*.02454369),i=clamp(a.z+.6,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?min(i*10.,1.)*(.6-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}else{float e=o.y>.5?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}`,
          ),
          c = O1(
            l,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          d = h(8, () => ({})),
          n = h(2, e => {
            let t = Z.c25();
            return Z.a4v(33984 + e),
              Z.b9j(3553, t),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              l => {
                let r = 0, s = 0, o = 0, c = 1 / 0, n = -1 / 0, i = 1 / 0, f = -1 / 0, m = 1 / 0, h = -1 / 0;
                Z.fas(36160, 36096, 3553, t, 0),
                  Z.c4s(256),
                  U().scale3dSelf(l).multiplySelf(U(T[e], a).multiplySelf(g).invertSelf());
                for (let a = 0; a < 8; ++a) {
                  let e = d[a],
                    t = (e.x = 4 & a ? 1 : -1, e.y = 2 & a ? 1 : -1, e.z = 1 & a ? 1 : -1, K.transformPoint(e));
                  r -= e.x = (0 | t.x) / l / t.w, s -= e.y = (0 | t.y) / l / t.w, o -= e.z = (0 | t.z) / l / t.w;
                }
                for (U().rotateSelf(298, 139).translateSelf(r / 8, s / 8, o / 8), l = 0; l < 8; ++l) {
                  let { x: e, y: t, z: a } = K.transformPoint(d[l]);
                  c = h1(c, e), n = L(n, e), i = h1(i, t), f = L(f, t), m = h1(m, a), h = L(h, a);
                }
                l = 10 + e,
                  m *= m < 0 ? l : 1 / l,
                  h *= 0 < h ? l : 1 / l,
                  Z.uae(
                    v("b"),
                    !1,
                    p(
                      U(X1, a).scaleSelf(2 / (n - c), 2 / (f - i), 2 / (m - h)).translateSelf(
                        (n + c) / -2,
                        (f + i) / -2,
                        (m + h) / 2,
                      ).multiplySelf(K),
                      u[e],
                    ),
                  ),
                  Q1(v("c"), !j, 41);
              };
          }),
          i = Z.c5w(),
          r = (l = Z.c25(), Z.c3z()),
          f = Z.c5w();
        o(),
          Z.uae(o("a"), !1, p(D1(1e-4, 2, 1.4, .4))),
          c(),
          Z.ubh(c("q"), 2),
          Z.ubh(c("h"), 1),
          Z.ubh(c("g"), 0),
          s(),
          Z.ubh(s("q"), 2),
          Z.b6o(36160, i),
          Z.d45([0]),
          Z.r9l(0),
          Z.b6o(36160, f),
          Z.bb1(36161, r),
          Z.r4v(36161, 33190, 128, 128),
          Z.f8w(36160, 36096, 36161, r),
          Z.a4v(33986),
          Z.b9j(3553, l),
          Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null),
          Z.fas(36160, 36064, 3553, l, 0),
          Z.b9j(3553, Z.c25()),
          Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, t),
          Z.t2z(3553, 10241, 9987),
          Z.t2z(3553, 10240, 9729),
          Z.gbn(3553),
          Z.e8z(2929),
          Z.e8z(2884),
          Z.c70(1),
          Z.c7a(1029),
          Z.d4n(515),
          Z.c5t(0, 0, 0, 0),
          (() => {
            let e,
              n,
              i,
              f,
              m,
              h,
              u,
              g,
              v,
              d,
              p,
              b,
              S,
              l,
              t = !0,
              r = [],
              a = () => {
                b4.innerHTML = "Music: " + t, A || !t ? K1.disconnect() : K1.connect(P1.destination);
              },
              s = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                D = D1(.3, 181, e, 1.732051),
                  T = [D1(.3, 55, e, 1.732051), D1(55, 181, e, 1.732051)],
                  f = g = void 0,
                  r.length =
                    F =
                    l =
                    b =
                    S =
                    o1 =
                    c1 =
                      0;
              },
              o = (e, t = 0) => {
                if (A !== e) {
                  A = e, j = t, s(), document.body.className = e ? "l m" : "l";
                  try {
                    e
                      ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
                      : (document.body.requestFullscreen().catch(() => 0), K1.start());
                  } catch {}
                  a();
                }
              };
            oncontextmenu = () => !1,
              b1.onclick = () => o(!1),
              b2.onclick = () => o(!1, 1),
              b5.onclick = () => o(!0),
              b4.onclick = () => {
                t = !t, a();
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              onclick = e => {
                if (!A && (e.target === hC && (F = 1), j)) {
                  try {
                    hC.requestPointerLock();
                  } catch {}
                }
              },
              onkeyup = onkeydown = e => {
                let t;
                e.repeat
                  || (t = {
                    KeyE: 0,
                    Space: 0,
                    Enter: 0,
                    Escape: 1,
                    KeyA: 2,
                    ArrowLeft: 2,
                    KeyD: 3,
                    ArrowRight: 3,
                    KeyW: 4,
                    ArrowUp: 4,
                    KeyS: 5,
                    ArrowDown: 5,
                  }[e.code],
                    (r[t] = !!e.type[5] && !0) && (0 === t && (F = 1), 1 === t && o(!0)));
              },
              onmousemove = ({ movementX: e, movementY: t }) => {
                j && (e || t) && (B += .1 * e, Q += .1 * t);
              },
              hC.ontouchstart = l => {
                if (!A) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    j && e > hC.clientWidth / 2
                      ? void 0 === g && (v = 0, h = e, u = t, g = a, d = B, p = Q)
                      : void 0 === f && (m = 0, n = e, i = t, f = a);
                  }
                  e = r1;
                }
              },
              hC.ontouchmove = l => {
                let r, s, o, c;
                if (!A) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    g === a && (B = d + (e - h) / 2.3, Q = p + (t - u) / 2.3, v = 1),
                      f === a
                      && (a = (n - e) / 20,
                        r = q(a),
                        o = q(s = (i - t) / 20),
                        (c = .5 < L(r, o)) && (m = 1),
                        b = (c && .2 < r) * N(a, -1),
                        S = (c && .2 < o) * N(s, -1),
                        2 < r && (n = e + 20 * (a < 0 ? -1 : 1)),
                        2 < o && (i = t + 20 * (s < 0 ? -1 : 1)));
                  }
                }
              },
              hC.ontouchend = t => {
                let a;
                document.activeElement === document.body && t.preventDefault();
                for (let e of t.changedTouches) {
                  e.identifier === g
                    ? (g = void 0, v || (a = 1), v = 0)
                    : e.identifier === f
                    ? (f = void 0, S = b = 0, m || (a = 1), m = 0)
                    : a = 1;
                }
                t.target === hC && a && e && .02 < (t = r1 - e) && t < .7 && (F = 1);
              },
              Y = () => {
                o1 = S + (r[4] ? 1 : 0) - (r[5] ? 1 : 0), c1 = b + (r[2] ? 1 : 0) - (r[3] ? 1 : 0);
                let a = navigator.getGamepads()[0];
                if (a) {
                  let e = e => t[e]?.pressed || 0 < t[e]?.value ? 1 : 0, t = a.buttons;
                  a = a.axes,
                    j && (Q += H * u1(a[3], .3) * 80, B += H * u1(a[2], .3) * 80),
                    o1 += e(12) - e(13) - u1(a[1], .2),
                    c1 += e(14) - e(15) - u1(a[0], .2),
                    e(9) && o(!0),
                    (a = e(3) || e(2) || e(1) || e(0)) && !l && (F = 1),
                    l = a;
                }
              },
              document.onvisibilitychange = onblur = onresize = s,
              o(!0);
          })(),
          (() => {
            let u,
              c,
              n,
              i,
              f,
              m,
              h,
              g,
              v,
              d,
              p,
              b,
              S,
              A,
              M = 1,
              I = 2,
              k = 15,
              F = { x: 0, y: 0, z: 0 },
              Y = () => (I ? P[O] : X[c && 1 === X[c].G && c || 0]).m,
              D = e => {
                let { x: t, y: a, z: l } = 1 < I
                  ? U(P[O].m).multiplySelf(P[O].H).transformPoint({ x: 0, y: O || .9 < $ ? 15 : 1, z: -2.4 })
                  : Y().transformPoint(F);
                e && (h = (t - R.x) / H, g = (l - R.z) / H), R.x = t, R.y = a, R.z = l;
              },
              C = (e, t, a) => {
                U(Y()).invertSelf(),
                  K.m41 = K.m42 = K.m43 = 0,
                  e = K.transformPoint({ x: e, z: a, w: 0 }),
                  F.x += e.x,
                  F.y += t,
                  F.z += e.z,
                  D();
              },
              T = (e, t, a, l) => E(e, t, M || (N(q(t - e) ** .5 - a) + 1 / 7) * (1 - U1(-1.5 * l * H)));
            x = t => {
              let e;
              D(u),
                Z.r9r(0, 0, 128, 128, 6408, 5121, L1),
                (() => {
                  let t, e, a, l, r, s, o = 0, c = 0, n = 0, i = 0, f = -1, m = 0, h = 0;
                  for (t = 0; t < 36; ++t) {
                    for (e = 512 * t, a = 96; a < 416; a += 4) {
                      for (l = 0; l < 2; ++l) {
                        (r = L1[e + a + l]) > i && (i = r),
                          r + (s = L1[e + a + l + 2]) && (f < 0 || f === t)
                          && (f = t, s === u ? ++o : c && c !== s || (c = s, ++n));
                      }
                    }
                  }
                  for (u = f < 0 ? 0 : n > 2 * o ? c : u, o = 36; o < 128; o += 1) {
                    for (
                      t =
                        f =
                        n =
                        c =
                          0,
                        e = 512 * o,
                        a = 0;
                      a < 128;
                      a += 1
                    ) {
                      for (l = e + 4 * a, r = 0; r < 2; ++r) {
                        s = L1[l + r];
                        let e = L1[l + r + 2];
                        (r ? 64 < a : a < 64) ? c = L(c, s) : n = L(n, s), r ? t = L(t, e) : f = L(f, e);
                      }
                    }
                    q(n - c) > q(m) && (m = n - c), q(t - f) > q(h) && (h = t - f);
                  }
                  d = N(1 - .02 * L(q(m), q(h))), C(m / 255, i / 255, h / 255);
                })(),
                !I && u === c || (c = u, a = U(Y()).invertSelf().transformPoint(R), F.x = a.x, F.y = a.y, F.z = a.z),
                I = I && (u ? 0 : 1);
              var { x: a, y: l, z: r } = R;
              l < (a < -20 || r < 109 ? -25 : -9) && (I = 2),
                1 === u && (P[9].i = a < -15 && r < 0 ? 1 : 0),
                p = E(W(p, l, 2), l, I || 8 * q(p - l)),
                S = T(S, p, 2, 1),
                b = T(b, a, .5, 1),
                A = T(A, r, .5, 1),
                m = W(m, e1 * (27 < u && u < 32), 2),
                j
                  ? (l = I + (1 - U1(-18 * H)), w = E(w, a, l), n1 = E(n1, p + 1.5, l), i1 = E(i1, r, l), B = x1(B))
                  : (i1 = T(i1, A + -18 + 5 * m, 1, 2 + m),
                    n1 = T(n1, L(S + N((-60 - r) / 8, 0, 20) + 13 + 9 * m, 6), 4, 2),
                    w = T(w, b, 1, 2 + m),
                    l = h1(-6, -q(A - i1)),
                    B = y1(B, 90 - x1(N1(l, e = b - w) / J), M + (1 - U1(-10 * H))),
                    Q = y1(Q, 90 - N1(E1(l, e), n1 - S) / J, M + (1 - U1(-10 * H)))),
                Q = N(Q, -87, 87),
                M = 0,
                l = N(o1, -1),
                e = N(c1, -1);
              let s = u1(E1(l, e) ** .5, .1), o = N1(l, e);
              for (
                l = s * q(l) * _(o),
                  e = s * q(e) * G(o),
                  s && (n = 90 - o / J),
                  i = y1(i, n, 1 - U1(-8 * H)),
                  f = W(f, s, 10),
                  t().translateSelf(a, p, r).rotateSelf(0, i),
                  o = 0;
                o < 2;
                ++o
              ) {
                let e = 9.1 * y - V * o;
                U(X[37].m, t()).translateSelf(0, f * N(.45 * _(e - V / 2))).rotateSelf(f * _(e) * .25 / J, 0);
              }
              k = u ? 5 : W(k, I ? 10 : 19, 2.2),
                h = u || I ? 0 : W(h, 0, 3),
                g = u || I ? 0 : W(g, 0, 3),
                v = I ? 0 : W(v, u ? 7 * N(2 * s) * d : 0, u ? 9 : 1),
                o = j ? (180 + B) * J : 0,
                C(H * (h + v * (e * G(o) - l * _(o))), -k * H, H * (g + v * (e * _(o) + l * G(o))));
            };
          })(),
          requestAnimationFrame(e);
      }
    },
    m = new Image();
  m.onload = m.onerror = l,
    m.src = t,
    (r => {
      let L = 0,
        s = () => {
          let b = 0,
            e = m => {
              let r,
                h,
                s,
                u,
                o,
                c,
                n = 0,
                i = 0,
                g = [],
                f = new Int32Array(768 * m),
                v = 2 ** (a - 9) / m,
                d = V * 2 ** (l - 8) / m,
                p = X * m & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, t = +"000001234556112341234556011111111112011111111112000001111112"[12 * L + l];
                  e < 32;
                  ++e
                ) {
                  let a = (32 * l + e) * m;
                  for (r = 0; r < 4; ++r) {
                    if (u = 0, t && (u = S[t - 1].charCodeAt(e + 32 * r) - 40, u += 0 < u ? 106 : 0), u) {
                      if (!(h = g[u])) {
                        let l,
                          r,
                          s = 0,
                          o = 0,
                          c = h = u,
                          n = L < 2
                            ? e => e % 1 * 2 - 1
                            : H1,
                          i = L < 2
                            ? L < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : H1,
                          f = new Int32Array(C + T + q);
                        for (let t = 0, a = 0; C + T + q > t; ++t, ++a) {
                          let e = 1;
                          C > t ? e = t / C : C + T > t || (e = (1 - (e = (t - C - T) / q)) * 3 ** (-j / 16 * e)),
                            a < 0
                            || (a -= 4 * m,
                              r = .00396 * 2 ** ((c + M - 256) / 12),
                              l = .00396 * 2 ** ((c + F - 256) / 12) * (1 + (L ? 0 : .0072))),
                            f[t] = 80
                                * (n(s += r * e ** (I / 32)) * A + i(o += l * e ** (Y / 32)) * k
                                  + (D ? (2 * W1() - 1) * D : 0))
                                * e | 0;
                        }
                        h = g[h] = f;
                      }
                      for (let e = 0, t = 2 * a; h.length > e; ++e, t += 2) f[t] += h[e];
                    }
                  }
                  for (let e, t = 0; m > t; ++t) {
                    r = 0,
                      h = 2 * (a + t),
                      ((e = f[h]) || c)
                      && (o = .00308 * O,
                        1 !== L && 4 !== L || (o *= _(v * h * V * 2) * R / 512 + .5),
                        o = 1.5 * _(o),
                        n += o * i,
                        i += o * (s = (1 - Q / 255) * (e - i) - n),
                        e = 4 === L ? i : 3 === L ? s : n,
                        L || (e = (e *= 22e-5) < 1 ? -1 < e ? _(e / 4 * V * 2) : -1 : 1, e /= 22e-5),
                        e *= B / 32,
                        c = 1e-5 < e * e,
                        r = e * (1 - (s = _(d * h) * H / 512 + .5)),
                        e *= s),
                      p > h || (r += f[1 + h - p] * P / 255, e += f[h - p] * P / 255),
                      N[s = b + h >> 1] += (f[h] = r) / 65536,
                      E[s] += (f[++h] = e) / 65536;
                  }
                }
              }
              b += 768 * m;
            },
            S = [
              [
                "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
                "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
                "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
                "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
                "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
                "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
              ],
              [
                ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
                "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
                ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
                "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
                "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
                "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
              ],
              ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
              ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
              ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
            ][L],
            [A, M, I, k, F, Y, D, C, T, t, j, a, O, Q, B, H, l, P, X, R] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][L],
            q = 4 * t ** 2;
          e(5513), e(4562), e(3891), B1(++L < 5 ? s : r);
        },
        e = P1.createBuffer(2, 5362944, 44100),
        N = e.getChannelData(0),
        E = e.getChannelData(1);
      K1.buffer = e, K1.loop = !0, B1(s);
    })(() => {
      B1(() => {
        let a = 0,
          r = [],
          o = [],
          c = [],
          n = [],
          i = new Int32Array(8),
          f = new Map(),
          m = new Int32Array(i.buffer, 0, 5),
          h = new Float32Array(i.buffer);
        X.map((e, t) => {
          let s,
            l = e => {
              let { x: t, y: a, z: l } = s[e], r = (h[0] = t, h[1] = a, h[2] = l, f.get(e = "" + (s.C ? m : i)));
              return void 0 !== r
                ? (t = 3 * r, n[t] = (n[t++] + i[5]) / 2, n[t] = (n[t++] + i[6]) / 2, n[t] = (n[t] + i[7]) / 2)
                : (f.set(e, r = f.size), o.push(t, a, l, h[3]), c.push(i[4]), n.push(i[5], i[6], i[7])),
                r;
            };
          for (s of (h[3] = 41 < t ? -14 : e.G && t, e.o)) {
            let { x: e, y: t, z: a } = w1(s);
            i[4] = 0 | s.u, i[5] = 32767 * e, i[6] = 32767 * t, i[7] = 32767 * a;
            for (let e = 2, t = l(0), a = l(1); s.length > e; ++e) r.push(t, a, a = l(e));
          }
          e.o = null, e.s = a, e.D = a = r.length;
        }),
          Z.b11(34962, Z.c1b()),
          Z.b2v(34962, new Float32Array(o), 35044),
          Z.v7s(0, 4, 5126, !1, 0, 0),
          Z.b11(34962, Z.c1b()),
          Z.b2v(34962, new Int16Array(n), 35044),
          Z.v7s(1, 3, 5122, !0, 0, 0),
          Z.b11(34962, Z.c1b()),
          Z.b2v(34962, new Uint32Array(c), 35044),
          Z.v7s(2, 4, 5121, !0, 0, 0),
          Z.b11(34963, Z.c1b()),
          Z.b2v(34963, new Uint16Array(r), 35044),
          Z.e3x(0),
          Z.e3x(1),
          Z.e3x(2);
        try {
          let [a, l, e, t, r] = JSON.parse(localStorage.DanteSP22);
          P.map((e, t) => e.g = e.h = e.i = t ? 0 | a[t] : 0),
            f1.map((e, t) => e.i = 0 | l[t]),
            O = e,
            k = r,
            y = t,
            H = 0;
        } catch {}
        F1(), $ = N(O), B1(l);
      });
      let t = h(11, e => c(_(e / 10 * V), e / 10).rotate(+e).scale(1.0001 - e / 10, 0, 1 - e / 10)),
        o = h(10, e => d1(s(z1(18), t[e]).reverse(), s(z1(18), t[e + 1]), 1)).flat();
      b(() => d([m1.slice(1)], c(-2).scale3d(3).rotate(90, 0)), 0),
        b(() => {
          let e = a =>
              b(() => {
                m1.map(({ x: e, z: t }) => {
                  d(f(11, 1), c(4 * e, 4, a + 4 * t).scale(.8, 3, .8), v(.5, .3, .7, .6)),
                    d(f(), c(4 * e, 7, a + 4 * t).scale(1, .3), v(.5, .5, .5, .3));
                }),
                  d(g(
                    i(f(), c(0, 0, a).scale(5, 1, 5), v(.8, .8, .8, .3)),
                    ...[-1, 1].map(e => i(f(), c(5 * e, .2, a).rotate(-30 * e).scale(4, 1, 2), v(.8, .8, .8, .3))),
                  )),
                  d(f(), c(0, -3, a).scale(8, 2, 8), v(.4, .4, .4, .3));
              }),
            t = e =>
              g(
                i(f(), c(0, -e / 2).scale(6, e - 1, 2.2)),
                i(f(), c(0, -e / 2 - 6).scale(4, e - 3, 4)),
                i(f(32, 1), c(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            a = () => b(() => h(7, e => d(i(f(6, 1), c(4 * (e / 6 - .5), 3).scale(.2, 3, .2), v(.3, .3, .38))))),
            l = g(
              i(f(30, 1, 1.15, 1), c(0, -3).scale(3.5, 1, 3.5), v(.7, .4, .25, .7)),
              i(f(30, 1, 1.3, 1), c(0, -2.5).scale(2.6, 1, 3), v(.7, .4, .25, .2)),
              i(f(), c(4, -1.2).scale3d(2), v(.7, .4, .25, .3)),
            ),
            r = (b(() => {
              d(l), S(c(0, -3, 4));
            }),
              S(c(-5.4, 1.5, -19).rotate(0, -90)),
              M(c(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              M(c(0, 2.8), [5, 10, 3], [-5, 10, 3], ...z1(18).map(({ x: e, z: t }) => [7 * e, 10 * t, 4.5 - 2 * q(e)])),
              m1.map(({ x: e, z: t }) => d(f(6), c(3 * e, 3, 15 * t).scale(.7, 4, .7), v(.6, .3, .3, .4))),
              [-15, 15].map((e, t) => {
                a(),
                  a(),
                  d(f(), c(0, 6.3, e).scale(4, .3, 1), v(.3, .3, .3, .4)),
                  d(f(), c(0, 1, e).scale(3, .2, .35), v(.5, .5, .5, .3)),
                  d(f(), c(0, 0, t ? 22 : -23).scale(3, 1, 8), v(.9, .9, .9, .2)),
                  h(5, e =>
                    d(
                      o,
                      c(18.5 * (t - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                      v(1, 1, .8, .2),
                    ));
              }),
              d(f(), c(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), v(.8, .8, .8, .2)),
              d(f(), c(3, 1.5, -20).scale(.5, 2, 5), v(.7, .7, .7, .2)),
              d(f(), c(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), v(.75, .75, .75, .2)),
              d(f(5), c(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), v(.6, .3, .3, .4)),
              d(f(), v1(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), v(.8, .2, .2, .5)),
              d(g(
                u(
                  i(f(6, 0, 0, .3), c(8, -3, -4).scale(13, 1, 13), v(.7, .7, .7, .2)),
                  i(f(6), c(0, -8).scale(9, 8, 8), v(.4, .2, .5, .5)),
                  i(f(6, 0, 0, .3), c(0, -.92).scale(13, 2, 13), v(.8, .8, .8, .2)),
                ),
                i(f(5), n(5, 30, 5), v(.4, .2, .6, .5)),
                i(f(5, 0, 1.5), c(0, 1).scale(4.5, .3, 4.5), v(.7, .5, .9, .2)),
                i(f(), v1(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), v(.5, .5, .5, .5)),
                i(f(6), c(15, -1.5, 4).scale(3.5, 1, 3.5), v(.5, .5, .5, .5)),
              )),
              b(() => {
                d(f(5), c(0, -.2).scale(5, 1, 5), v(.6, .65, .7, .3)), S(c(0, 1.2));
              }),
              S(c(15, -2, 4)),
              b(() => {
                d(
                  g(
                    u(
                      i(f(), n(1.5, 1, 5), v(.9, .9, .9, .2)),
                      i(f(6), n(4, 1, 5), v(.9, .9, .9, .2)),
                      i(f(), c(0, -2).scale(2, 3.2, 1.9), v(.3, .8, .5, .5)),
                      i(f(16, 1, 0, 4), n(1, 1, 1.5).rotate(0, 90), v(.9, .9, .9, .2)),
                    ),
                    i(f(), n(1.3, 10, 1.3), v(.2, .7, .4, .6)),
                  ),
                  c(0, 0, 45),
                ), M(c(0, 2.8, 45), [0, 0, 4.5]);
              }),
              e(35),
              e(55),
              d(f(), c(-18.65, -3, 55).scale(2.45, 1.4, 2.7), v(.9, .9, .9, .2)),
              b(() => {
                d(f(3), c(-23, -1.7, 55.8).scale(5, .7, 8.3), v(.3, .6, .6, .2)),
                  d(f(8), c(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), v(.8, .8, .8, .2)),
                  d(f(), c(-23, -3, 55).scale(5.2, 1.7, 3), v(.5, .5, .5, .3)),
                  d(f(), c(-23, -2.2, 62).scale(3, 1, 4), v(.5, .5, .5, .3)),
                  S(c(-23, -.5, 66.5));
              }),
              b(() => {
                d(f(), c(-22.55, -3, 55).scale(1.45, 1.4, 2.7), v(.7, .7, .7, .2)),
                  d(g(i(f(), n(3, 1.4, 2.7)), i(f(), n(1.2, 8, 1.2))), c(-33, -3, 55), v(.7, .7, .7, .2));
              }),
              b(() => {
                d(g(
                  i(f(), c(-27, -3, 55).scale(3, 1.4, 2.7), v(.9, .9, .9, .2)),
                  i(f(), c(-27, -3, 55).scale(1, 3), v(.9, .9, .9, .2)),
                )), d(f(), c(-39, -3, 55).scale(3, 1.4, 2.7), v(.9, .9, .9, .2));
              }),
              b(() => {
                d(f(6), c(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), v(.7, .7, .7, .4));
              }),
              S(c(-55, -1.1, 46).rotate(0, 90)),
              d(f(6), c(-61.3, -2.4, 49).scale(3, 1, 5), v(.4, .6, .6, .3)),
              d(f(7), c(-57, -2.6, 46).scale(4, 1, 4), v(.8, .8, .8, .3)),
              [
                ...i(f(), c(0, -3).scale(11, 1.4, 3), v(.9, .9, .9, .2)),
                ...g(
                  i(f(6), v1(90).scale(6, 8, 6), v(.3, .6, .6, .3)),
                  i(f(4, 0, .01), c(0, 6).scale(12, 2, .75).rotate(0, 45), v(.3, .6, .6, .3)),
                  i(f(6), v1(90).scale(5, 12, 5), v(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(e => i(f(5), c(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), v(.3, .6, .6, .3))),
                ),
              ]),
            s = (d(r, c(-53, 0, 55)),
              b(() => d(r), 2),
              d(f(), c(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), v(.7, .7, .7, .2)),
              d(f(3, 0, -.5), c(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), v(.8, .8, .8, .2)),
              d(g(
                u(
                  i(f(), c(-100, -2.4, 55).scale(8, .9, 8), v(.8, .8, .8, .2)),
                  i(f(), c(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), v(.8, .8, .8, .2)),
                  i(f(), c(-100, -2.6, 70).scale(3, 1.1, 7), v(.8, .8, .8, .2)),
                  i(f(), c(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), v(.8, .8, .8, .2)),
                  i(f(6), c(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), v(.6, .6, .6, .3)),
                  i(f(), c(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), v(.8, .8, .8, .2)),
                  i(f(), c(-100, .42, 92).scale(3, 1.1, 4.1), v(.8, .8, .8, .2)),
                ),
                i(f(8), c(-100, -1, 55).scale(7, .9, 7), v(.3, .3, .3, .4)),
                i(f(8), c(-100, -2, 55).scale(4, .3, 4), v(.4, .4, .4, .5)),
                i(f(8, 0, -3.1), c(-100, -3, 55).scale(.4, 1, .4), v(.4, .4, .4, .5)),
              )),
              M(c(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              M(c(-89, .2, 80), [0, 0, 6]),
              d(g(
                i(f(), c(-100, 1, 63).scale(7.5, 4), v(.5, .5, .5, .4)),
                i(f(), c(-100, 0, 70).scale(2, 2, 10), v(.5, .5, .5, .4)),
                i(f(20, 1), c(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), v(.5, .5, .5, .4)),
              )),
              m1.map(({ x: t, z: a }) => {
                d(f(6), c(7 * t - 100, -3, 7 * a + 55).scale(1, 8.1), v(.6, .15, .15, .8)),
                  [4, -.4].map(e => d(f(6), c(7 * t - 100, e, 7 * a + 55).scale(1.3, .5, 1.3), v(.4, .2, .2, .8)));
              }),
              h(7, e => {
                d(
                  f((23 * e + 1) % 5 + 5, 0, .5),
                  c(5 * _(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
                  v(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
                );
              }),
              d(f(), c(-87, -9.5, 24).scale(7, 1, 3), v(.4, .5, .6, .4)),
              d(f(4), c(-86, -9.2, 27).scale(5, 1, 5), v(.5, .6, .7, .3)),
              d(f(12, 1), c(-86, -9, 31).scale(1.5, 1, 1.5), v(.3, .3, .4, .1)),
              S(c(-86, -7.5, 31)),
              b(() => {
                [0, 12, 24].map(e =>
                  d(f(), c(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), v(.2, .5, .6, .2))
                );
              }),
              b(() => {
                [6, 18].map(e =>
                  d(f(), c(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), v(.1, .4, .5, .2))
                );
              }),
              d(
                g(
                  u(
                    i(f(5), c(0, 0, -7).scale(2, 1.2, 2), v(.2, .4, .7, .3)),
                    i(f(5), n(9, 1.2, 9), v(0, .2, .3, .5)),
                    i(f(), n(11, 1, 13), v(.3, .4, .6, .3)),
                  ),
                  i(f(5), n(5.4, 5, 5.4), v(0, .2, .3, .5)),
                ),
                c(-38.9, -11.3, 17),
              ),
              S(c(-38.9, -9.6, 10)),
              b(() => {
                d(
                  g(
                    u(
                      i(f(5), c(0, 2).scale(5, 7, 5).skewY(8), v(.2, .4, .5, .5)),
                      i(f(5), c(0, 6).scale(1.1, 7, 1.1).skewY(-8), v(.25, .35, .5, .5)),
                      i(f(5), c(0, 9).scale(.6, 7, .6).skewY(8), v(.35, .3, .5, .5)),
                    ),
                    i(f(5), n(4, 8, 4), v(.2, .4, .5, .5)),
                    i(f(5), c(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), v(.2, .4, .5, .5)),
                  ),
                  c(-38.9, -11.3, 17),
                ), M(c(-39.1, -.6, 17).rotate(11), ...z1(15).map(({ x: e, z: t }) => [3 * e, 3 * t, 1.2]));
              }),
              m1.map(({ x: t, z: a }) => {
                d(f(14, 1), c(9 * t - 38.9, -7.3, 11 * a + 17).scale(1, 4), v(.25, .25, .25, 1)),
                  [1.5, 8].map(e =>
                    d(f(17, 1), c(9 * t - 38.9, e - 11.3, 11 * a + 17).scale(1.5, .5, 1.5), v(.6, .6, .6, .3))
                  );
              }),
              d(
                g(
                  u(
                    i(f(6), c(0, 0, -36).scale(15, 1.2, 15), v(.7, .7, .7, .3)),
                    i(f(), c(0, 0, -18).scale(4, 1.2, 6), v(.45, .4, .6, .3)),
                  ),
                  ...h(6, t =>
                    h(6, e =>
                      i(
                        f(6),
                        c(4.6 * e - 12 + 2 * (1 & t), 0, 4.6 * t - 50 + 2 * _(4 * e)).scale(2, 5, 2),
                        v(.7, .7, .7, .3),
                      ))).flat(),
                ),
                c(-38.9, -11.3, 17),
              ),
              M(c(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              d(f(5), c(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), v(.8, .1, .25, .4)),
              S(c(-84, -.5, 85).rotate(0, 45)),
              b(() => {
                d(l), S(c(0, -3, -4).rotate(0, 180));
              }),
              g(
                i(f(), c(0, -.5, 1).scale(1.15, 1.2, 6.5), v(.25, .25, .35, .3)),
                i(f(3), c(0, 0, -5.5).scale(3, 2), v(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(e => i(f(), c(e, -.5, 1).scale(.14, .3, 6.5), v(.7, .2, 0, .3))),
              ));
          b(() =>
            h(2, e =>
              d(s, c(9 * e - 110 + (1 & e), 1.7, -12)))
          ),
            b(() =>
              h(2, e => d(s, c(9 * (e + 2) - 110 + (1 & e), 1.7, -12)))
            ),
            b(() =>
              h(3, e => d(s, c(9 * e - 106, 1.7, -12)))
            ),
            d(
              g(
                u(i(f(), c(26.5, -1.6, 10).scale(20, 2.08, 3)), i(f(), c(26.5, -.6, 10).scale(19, 2, .5))),
                ...h(4, e => i(f(), c(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
                ...h(3, e =>
                  i(f(), c(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              c(-123, 0, -12),
              v(.5, .5, .6, .2),
            ),
            S(c(-116, -1.4, -18).rotate(0, 180)),
            d(f(), c(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), v(.8, .8, .8, .2)),
            d(f(6), c(-116, -2.6, -16.5).scale(3.2, .8, 3), v(.6, .5, .7, .2)),
            d(f(), c(-115.5, -17, -12).scale(.5, 15, 2.2), v(.6, .6, .6, .3)),
            d(f(8), c(-114, -17, -2).scale(2, 15, 2), v(.6, .6, .6, .3)),
            d(f(8), c(-79, -17, -2).scale(2, 15, 2), v(1, 1, 1, .3)),
            d(f(), c(-77, -17, -50.5).scale(2.2, 15, .5), v(.6, .6, .6, .3)),
            h(3, e => {
              d(t(16), c(12 * e - 109, -9, -12), v(.6, .6, .6, .3)),
                d(t(16), c(-77, -9, -12 * e - 20).rotate(0, 90), v(.6, .6, .6, .3));
            }),
            d(g(
              i(f(12), c(-77, -14.5, -12).scale(4, 17.5, 4), v(.7, .7, .7, .2)),
              i(f(), c(-79, .1, -12).scale(3.5, 2, 1.3), v(.4, .5, .6, .2)),
              i(f(), c(-77, .1, -14).scale(1.5, 2, 2), v(.4, .5, .6, .2)),
              i(f(12), c(-77, 3.1, -12).scale(3, 5, 3), v(.4, .5, .6, .2)),
            )),
            d(f(), c(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), v(.6, .6, .6, .3)),
            d(f(9), c(-98, -18.4, -40).scale(2.5, 13.5, 2.5), v(.5, .5, .5, .3)),
            d(g(
              i(f(), c(-93, -5.8, -40).scale(9, 1, 5), v(.8, .8, .8, .1)),
              i(f(9), c(-98, -5.8, -40).scale(3, 8, 3), v(.7, .7, .7, .2)),
            )),
            S(c(-98, -4.4, -40).rotate(0, 90)),
            M(c(-115, .2, -12), [0, 0, 3.5]),
            M(c(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            d(g(
              u(
                i(f(6, 0, 0, .6), c(-100, .7, 105.5).scale(8, 1, 11), v(.7, .7, .7, .2)),
                i(f(), c(-101.5, .7, 93.5).scale(10.5, 1, 2), v(.7, .7, .7, .2)),
              ),
              i(f(5), c(-100, .7, 113).scale(4, 3, 4), v(.7, .7, .7, .2)),
            )),
            h(4, e =>
              b(() =>
                d(
                  f(6),
                  c(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                    2.6,
                    1,
                    2.5,
                  ),
                  v(.5 - e / 8, e / 12 + .5, .7, .3),
                )
              )),
            b(() => {
              d(g(i(f(10), n(6, 2, 6), v(.1, .6, .5, .3)), i(f(10), n(3.3, 6, 3.3), v(.1, .6, .5, .5)))),
                d(f(15, 1), c(-7.5).rotate(0, 90).scale(3, 2.3, 3), v(.4, .4, .4, .3)),
                d(f(10), c(-7.5).rotate(0, 90).scale(2, 2.5, 2), v(.3, .8, .7, .3)),
                d(f(5), c(-7.5).rotate(0, 90).scale(1, 3), v(.5, .5, .5, .5)),
                S(c(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(e =>
                  d(o, v1(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), v(1, 1, .8, .2))
                ),
                M(c(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(t => {
              [7.2, 1.5].map(e => d(f(15, 1), c(-7.5 * t - 100, e + .7, 96).scale(1.1, .5, 1.1), v(.5, .24, .2, .4))),
                d(o, c(-5 * t - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * t - 90), v(1, 1, .8)),
                d(f(12, 1), c(-7.5 * t - 100, 3.7, 96).scale(.8, 4, .8), v(.6, .24, .2, .5)),
                d(
                  g(
                    i(f(), c(-4 * t, 3.5, -.5).scale(4, 4, .7), v(.5, .5, .5, .4)),
                    i(f(), n(3, 3, 10), v(.6, .24, .2, .5)),
                    i(f(28, 1), c(0, 3, -5).scale(3, 4, 10).rotate(90, 0), v(.6, .24, .2, .5)),
                    i(f(5), c(-5.3 * t, 7).rotate(90, 0).scale(1.7, 5, 1.7), v(.6, .24, .2, .5)),
                    i(f(5), c(-5.3 * t, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), v(.6, .24, .2, .5)),
                  ),
                  c(t - 100, .7, 97),
                );
            }),
            d(g(
              i(f(), c(-82.07, .8, 106).scale(11, .9, 2.2), v(.7, .7, .7, .1)),
              i(f(45, 1), c(-81, .7, 106).scale3d(7.7), v(.7, .7, .7, .1)),
            )),
            b(() => {
              d(g(
                i(f(45, 1), n(7.5, 1, 7.5), v(.45, .45, .45, .2)),
                i(f(), c(0, 0, -5.5).scale(1.5, 3, 2.7), v(.45, .45, .45, .2)),
              )),
                d(f(8), c(0, 2).scale(3, 1.5, 3).rotate(0, 22), v(.7, .7, .7, .1)),
                d(f(5), c(0, 2).scale(1, 2), v(.3, .3, .3, .2)),
                M(c(0, 3), ...z1(14).map(({ x: e, z: t }) => [5.6 * e, 5.6 * t, 2]));
            }),
            b(() => {
              [-1, 1].map(e =>
                d(o, v1(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), v(1, 1, .8))
              ),
                d(g(i(f(28, 1), c(0, 2).scale(7.5, 1, 7.5), v(.35, 0, 0, .3)), i(f(), n(9, 5, 2), v(.3, 0, 0, .3)))),
                d(i(f(28, 1), n(7.5, 1, 7.5), v(.45, .45, .45, .2))),
                d(i(f(5), c(0, 1).scale(1, .2), v(.3, .3, .3, .2)));
            }),
            b(() => {
              d(g(
                i(f(28, 1), c(0, 2).scale(7.5, 1, 7.5), v(.35, 0, 0, .3)),
                i(f(), c(7).scale(9, 5, 2), v(.3, 0, 0, .3)),
                i(f(), c(0, 0, 7).scale(2, 5, 9), v(.3, 0, 0, .3)),
              )),
                d(i(f(28, 1), n(7.5, 1, 7.5), v(.45, .45, .45, .2))),
                d(i(f(5), c(0, 1).scale(1, .2), v(.3, .3, .3, .2)));
            }),
            b(() => {
              d(g(
                i(f(28, 1), c(0, 2).scale(7.5, 1, 7.5), v(.35, 0, 0, .3)),
                i(f(), c(7).scale(9, 5, 2), v(.3, 0, 0, .3)),
                i(f(), c(0, 0, -7).scale(2, 5, 9), v(.3, 0, 0, .3)),
              )),
                d(i(f(28, 1), n(7.5, 1, 7.5), v(.45, .45, .45, .2))),
                d(i(f(5), c(0, 1).scale(1, .2), v(.3, .3, .3, .2)));
            }),
            d(f(), c(-58, 1, 106).scale(2, .65, 2), v(.7, .7, .7, .2)),
            d(f(), c(-50.7, 1, 99).scale(2, .65, 1), v(.7, .7, .7, .2)),
            d(f(), c(-42, .4, 91).scale(5, 1, 2.5), v(.7, .7, .7, .3)),
            d(f(), c(-34.2, .4, 91).scale(3, 1, 3), v(.7, .7, .7, .3)),
            S(c(-34, 2.7, 96).rotate(-12, 0)),
            d(f(5), c(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), v(.2, .5, .5, .6)),
            [v(.1, .55, .45, .2), v(.2, .5, .5, .3), v(.3, .45, .55, .4)].map((e, t) =>
              b(() => {
                d(f(), c(-23.5, .5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), e),
                  2 === t && d(f(), c(-29.1, .4, 91).scale(2.1, 1, 3), v(.7, .7, .7, .3)),
                  1 === t && d(f(), c(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), v(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(e => d(o, c(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), v(1, 1, .8))),
            h(3, e =>
              d(
                t(24.7 - .7 * (1 & e)),
                c(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? v(.5, .5, .5, .3) : v(.35, .35, .35, .5),
              )),
            d(g(
              i(f(6, 0, 0, .3), c(0, -.92, 95).scale(14, 2, 14), v(.8, .8, .8, .2)),
              i(f(5), c(0, 0, 95).scale3d(6), v(.3, .3, .3, .5)),
            )),
            S(c(0, 1.7, 82).rotate(0, 180)),
            d(f(5), c(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), v(.5, .3, .3, .4)),
            d(f(6), c(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), v(.5, .6, .7, .3)),
            d(f(), c(0, 16, 129).scale(1.5, 1, 2), v(.5, .6, .7, .3)),
            d(f(7), c(0, 16.2, 133).scale(5, 1, 5), v(.4, .5, .6, .4)),
            d(g(
              u(
                i(f(), c(0, 16, 110.5).scale(12, 1, 3), v(.5, .3, .3, .4)),
                i(f(), c(0, 16, 111).scale(3, 1, 3.8), v(.5, .3, .3, .4)),
              ),
              i(f(5), c(0, 16, 103.5).scale(5.5, 5, 5.5), v(.5, .3, .3, .4)),
            )),
            b(() => {
              d(f(3), c(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), v(.5, .3, .3, .4)),
                [22, 30].map(e => {
                  d(f(6), c(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), v(.7, .7, .7, .4)),
                    d(f(), c(0, 6.2, e + 95).scale(.5, 11, .5), v(.5, .3, .3, .4));
                });
            }),
            b(() => {
              d(f(5), n(5, 1.1, 5), v(.5, .3, .3, .4)),
                d(f(5), n(5.5, .9, 5.5), v(.25, .25, .25, .4)),
                S(c(0, 1.5, -1).rotate(0, 180));
            }),
            M(c(0, 3, 95), ...z1(9).map(({ x: e, z: t }) => [9 * e, 9 * t, 4])),
            M(c(0, 19, 134), [0, 0, 3.5]);
        }),
        b(() => {
          d(a(20), c(0, 1).scale3d(.5), v(1, .3, .4)),
            d(a(30), n(.65, .8, .55), v(1, .3, .4)),
            d(f(), c(0, .9, .45).scale(.15, .02, .06), v(.3, .3, .3)),
            [-1, 1].map(e => {
              d(o, v1(0, 0 < e ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), v(1, 1, .8)),
                d(
                  i(g(f(15, 1), i(f(), c(0, 0, 1).scale(2, 2, .5))), v1(-90, 0).scale(.1, .05, .1), v(.3, .3, .3)),
                  c(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
                ),
                b(() => {
                  d(f(20, 1), c(.3 * e, -.8).scale(.2, .7, .24), v(1, .3, .4));
                });
            });
        }),
        b(() => {
          d(f(6).slice(0, -1), n(.77, 1, .77), v(1, .3, .5));
        }, 0),
        b(() => {
          d(
            a(30, 24, (e, t, a) => {
              let l = t / 24, r = e * V * 2 / 30, s = _(l ** .6 * V / 2);
              return e = l * l * _(e * V * 14 / 30) / 4,
                23 < t
                  ? { x: a.C = 0, y: -.5, z: 0 }
                  : { x: G(r) * s, y: G(l * V) - l - e, z: _(r) * s + _(e * V * 2) / 4 };
            }),
            n(.7, .7, .7),
            v(1, 1, 1),
          ), [-1, 1].map(e => d(a(12), c(.16 * e, .4, -.36).scale3d(.09)));
        }, 0),
        b(() => {
          d(f(6, 1), n(.13, 1.4, .13), v(.3, .3, .5, .1)),
            d(f(10), c(0, 1).scale(.21, .3, .21), v(1, .5, .2)),
            d(f(3), c(0, -1).rotate(90, 90).scale(.3, .4, .3), v(.2, .2, .2, .1));
        }, 0);
    });
});
