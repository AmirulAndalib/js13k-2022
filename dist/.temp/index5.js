let _,
  A,
  J,
  k,
  Z,
  $,
  e1,
  r,
  D = 0,
  t1 = 0,
  a1 = 0,
  l1 = 0,
  r1 = 0,
  s1 = 0,
  x = 0,
  o1 = 0,
  y = 0,
  c1 = 0,
  z = 0,
  n1 = 0,
  i1 = 0,
  f1 = 0,
  w = 0,
  m1 = 0,
  Y = 0,
  T = 1,
  C = 180,
  H = .066,
  O = [],
  B = [],
  h1 = [],
  u1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Q = { x: 0, y: 0, z: 0 },
  x1 = { x: 0, y: 0, z: 0 },
  P = e => e < 0 ? -e : e,
  g1 = (e, t) => e < t ? e : t,
  X = (e, t) => t < e ? e : t,
  y1 = (e, t) => P(e) > t ? e : 0,
  R = (e, t = 0, a = 1) => e < t ? t : a < e ? a : e,
  v1 = e => q1(K(e * W1), G(e * W1)) / W1,
  z1 = (e, t, a) => e + (2 * (t = (t - e) % 360) % 360 - t) * R(a) || 0,
  q = (e, t, a) => (0 < a ? a < 1 ? e + (t - e) * a : t : e) || 0,
  h = (e, t) => (e = R(e), q(e, 1 - e, t)),
  L = (
    e,
    t = Q1,
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
  N = (
    e = B1,
    t = U,
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
  i = (e, t, a) => B1.translate(e, t, a),
  f = (e, t, a) => B1.rotate(e, t, a),
  u = (e, t, a) => B1.scale(e, t, a),
  p = (e, a) => Array.from(Array(e), (e, t) => a(t)),
  m = (e, t, a) => (e.D = a, e.A = t, e),
  s = (e, l, t = e.A) =>
    m(
      e.map(e => {
        let t, a;
        return { x: e, y: t, z: a } = e,
          { x: e, y: t, z: a } = l.transformPoint({ x: e, y: t, z: a }),
          { x: e, y: t, z: a };
      }),
      t,
      e.D,
    ),
  g = (e, t, a) => e.map(e => s(e, t, a)),
  d1 = (a, l = 0) =>
    p(a, e => {
      let t = G(2 * W * e / a);
      return { x: K(2 * W * e / a), y: 0, z: P(t) < .01 ? t : t < 0 ? t - l : t + l };
    }),
  o = (l, r, s) => l.map((e, t, { length: a }) => m([e, r[a - t - 1], r[a - (t + 1) % a - 1], l[(t + 1) % a]], l.A, s)),
  v = (
    e,
    t,
    a = 0,
    l,
  ) => (e = e ? d1(e, l) : u1,
    l = s(e, i(0, 1).scale3d(0 < a ? a : 1)),
    e = s(e, i(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...o(e, l, t), l, e]),
  l = (l, r = l, s = (e, t) => (t *= W / r, { x: G(e *= 2 * W / l) * K(t), y: G(t), z: K(e) * K(t) })) => {
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
    return t = L1(a, l, r), a /= t, l /= t, r /= t, { x: a, y: l, z: r, w: a * s.x + l * s.y + r * s.z };
  },
  n = (l, r) => {
    let s, o, c, n = r.C;
    for (let e = 0; n.length > e; ++e) {
      if ((s = p1(l, n[e]) - l.w) < -8e-5 ? c = r : 8e-5 < s && (o = r), c && o) {
        o = [], c = [], n = r.C, e = r.B;
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
          m: 2 < o.length && { C: m(o, n.A, n.D), B: e, s: r },
          l: 2 < c.length && { C: m(c, n.A, n.D), B: e, s: r },
        };
      }
    }
    return { m: o, l: c };
  },
  c = (e, t, a = w1(t.C)) => {
    let l, r, s;
    return e
      ? ({ m: l, l: r } = n(e, t), l || r || e.u.push(t), l && (e.m = c(e.m, l, a)), r && (e.l = c(e.l, r, a)))
      : ({ x: l, y: r, z: a, w: s } = a, e = { x: l, y: r, z: a, w: s, u: [t], m: 0, l: 0 }),
      e;
  },
  a = (t, r, s) => {
    let o = [],
      c = (e, t) => {
        let { m: a, l } = n(e, t);
        a || l || (0 < s * p1(e, r) ? a = t : l = t), a && (e.m ? c(e.m, a) : o.push(a)), l && e.l && c(e.l, l);
      };
    for (let e of r.u) c(t, e);
    return o;
  },
  S1 = (e, t) => e && (t(e), S1(e.m, t), S1(e.l, t)),
  A1 = e => (S1(e, t => {
    let e = t.l;
    t.l = t.m, t.m = e, t.x *= -1, t.y *= -1, t.z *= -1, t.w *= -1;
    for (let e of t.u) e.B = !e.B;
  }),
    e),
  M1 = e => e.length ? e.reduce((e, t) => c(e, { C: t, B: 0, s: 0 }), 0) : e,
  d = (...e) =>
    e.reduce((l, t) => {
      let r = [];
      if (l = M1(l), t) {
        t = M1(t), S1(l, e => e.u = a(t, e, 1)), S1(t, e => r.push([e, a(l, e, -1)]));
        for (let [t, a] of r) for (let e of a) c(l, e, t);
      }
      return l;
    }),
  b = (e, ...t) => {
    let a = e => {
        let t;
        return e.s && ((t = l.get(e.s)) ? (r.delete(t), e = a(e.s)) : l.set(e.s, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = A1(d(A1(M1(e)), ...t)),
      S1(e, t => {
        for (let e of t.u) r.set(a(e), e.B);
      }),
      Array.from(r, ([{ C: e }, t]) => {
        let a = e.map(({ x: e, y: t, z: a }) => ({ x: e, y: t, z: a }));
        return m(t ? a.reverse() : a, e.A, e.D);
      });
  },
  E = (e, t, a) => q(e, t, 1 - N1(-a * H)),
  I1 = () => {
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
      ][a1 = h1.reduce((e, { j: t }) => e + t, 0)] + " / XIII";
  },
  F1 = () => {
    localStorage.DanteSP22 = JSON.stringify([B.map(({ j: e }) => e), h1.map(({ j: e }) => e), l1, D, c1]);
  },
  j1 = (e, t, a, l) =>
    new DOMMatrix([a, 0, 0, 0, 0, l, 0, 0, 0, 0, (t + e) / (e - t), -1, 0, 0, 2 * t * e / (e - t), 0]),
  S = (e, t, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * t << 8 | 255 * e,
  M = (e, t = new DOMMatrix(), a) => r.u.push(...g(e, t, a)),
  I = (e, t = 1) => {
    let a = r;
    return O.push(t = { o: new DOMMatrix(), H: O.length, G: t, u: [] }), e(r = t), r = a, t;
  },
  k1 = e => (e = e.transformPoint(), L1(Q.x - e.x, Q.y - e.y, Q.z - e.z)),
  F = e => {
    let t = r,
      a = B.length,
      l = {
        j: 0,
        g: 0,
        i: 0,
        s: t,
        o: e,
        h() {
          l.g = E(l.g, l.j, 4),
            l.i = E(l.i, l.j, 1),
            N(t.o).multiplySelf(e),
            J && k1(U) < 3 && (l.g < .3 || .7 < l.g)
            && (l.j = l.j ? 0 : 1, a && 1 / 0 > T && (T = D + 1, h4.innerHTML = "* click *"), l1 = a, F1()),
            L(U.rotateSelf(60 * l.g - 30, 0).translateSelf(0, 1), X1, a + 13),
            X1[16 * a + 223] = 1 - l.g;
        },
      };
    B.push(l),
      M(v(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), S(.4, .5, .5)),
      M(v(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), S(.4, .5, .5)),
      M(v(), e.translate(0, -.4).scale(.5, .1, .5), S(.5, .5, .4));
  },
  j = (f, ...e) => {
    let m = -1,
      h = 0,
      u = 0,
      g = 0,
      v = 0,
      d = 0,
      p = 1,
      b = 3,
      S = {
        j: 0,
        h() {
          if (!S.j) {
            let e, t, a, l, r, s, o, c, n = 1, i = 1 / 0;
            for (let l of M) {
              let { x: e, z: t, w: a } = l;
              t = (e = L1(F - e, j - t)) - a, c ||= e < a, 0 < t && i > t && (i = t, I = l), n = g1(n, e / a);
            }
            c
            || ({ x: e, z: t, w: a } = I,
              l = F - e,
              r = j - t,
              s = L1(l, r),
              o = q1(-r, l),
              p && (u = (E1() - .5) * W / 2, b = R(b / (1 + E1()))),
              o += u,
              m = -G(o),
              h = K(o),
              .1 < s && (s = g1(s, a) / (s || 1), F = l * s + e, j = r * s + t)),
              p = c,
              b = E(b, 6 * (1 - n) + 3, n + 3),
              k = E(k, F = E(F, F + m, b), b),
              Y = E(Y, j = E(j, j + h, b), b),
              g = z1(g, q1(k - v, Y - d) / W1 - 180, 1 - N1(-3 * H)),
              k1(N(A.o).multiplySelf(f).translateSelf(v = k, 0, d = Y).rotateSelf(0, g, 7 * K(1.7 * D))) < 1.6
              && (S.j = 1,
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
                ][a1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > T && (T = D + (a1 && a1 < 12 ? 5 : 7), h4.innerHTML = e),
                I1(),
                F1());
          }
          S.j
          && N(O[2].o).translateSelf(
            t % 4 * 1.2 - 1.7 + K(D + t) / 7,
            -2,
            1.7 * (t / 4 | 0) - 5.5 + P(t % 4 - 2) + G(D / 1.5 + t) / 6,
          ), L(U, X1, t);
        },
      },
      A = r,
      t = h1.length,
      M = e.map(([e, t, a]) => ({ x: e, z: t, w: a })),
      I = M[0],
      { x: F, z: j } = I,
      k = F,
      Y = j;
    h1.push(S);
  },
  Y1 = (e, t = 35633) => (t = V.c6x(t), V.s3c(t, e), V.c6a(t), t),
  D1 = (e, t) => {
    let a = {}, l = V.c1h();
    return V.abz(l, e), V.abz(l, Y1(t, 35632)), V.l8l(l), e => e ? a[e] || (a[e] = V.gan(l, e)) : V.u7y(l);
  },
  T1 = (e, t, a) => {
    let l;
    A
      ? (l = f(0, 40 * K(t1) - 70),
        L(l, P1, 37),
        L(l, P1, 38),
        L(l, P1, 39),
        V.uae(e, !1, P1),
        V.d97(4, O[39].F - O[37].v, 5123, 2 * O[37].v))
      : (V.uae(e, !1, P1),
        V.d97(4, (t ? O[39].F : O[37].v) - 3, 5123, 6),
        V.uae(e, !1, X1),
        V.das(4, O[a].F - O[a].v, 5123, 2 * O[a].v, h1.length),
        V.das(4, O[40].F - O[40].v, 5123, 2 * O[40].v, B.length));
  },
  C1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  H1 = e => K(e * W * 2),
  O1 = new AudioContext(),
  B1 = new DOMMatrix(),
  U = new DOMMatrix(),
  Q1 = new Float32Array(16),
  P1 = new Float32Array(624),
  X1 = new Float32Array(624),
  R1 = new Uint8Array(65536),
  { PI: W, atan2: q1, sin: K, cos: G, hypot: L1, exp: N1, random: E1, min: U1 } = Math,
  W1 = W / 180,
  t = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  K1 = O1.createBufferSource(),
  V = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in V) V[e[0] + [...e].reduce((e, t, a) => (e * a + t.charCodeAt(0)) % 434, 0).toString(36)] = V[e];
C1(() => {
  let e = 0,
    a = () => {
      if (2 == ++e) {
        let u = [new Float32Array(16), new Float32Array(16)],
          l = e => {
            if (
              V.f1s(),
                requestAnimationFrame(l),
                t1 += t = (e - (_ || e)) / 1e3,
                t < .04 + .02 * E1() ? H = 0 : (H = A ? 0 : U1(.066, (e - (_ || e)) / 1e3), D += H, _ = e),
                _ = _ || e,
                0 < H
            ) {
              Z(),
                z = h(B[12].g, B[13].g),
                x = q(E(x, 0, 1), v1(x + 60 * H), B[5].g - B[6].i),
                r1 = q(E(r1, 0, 5), v1(r1 + 56 * H), z),
                s1 = q(E(s1, 0, 4), v1(s1 + 48 * H), z),
                c1 = E(c1, B[9].i, .2 + .3 * P(2 * B[9].i - 1)),
                y = E(y, o1 ? E(y, -9, 1.5) : R(D / 3), 1),
                T && D > T && (T = 0, h4.innerHTML = ""),
                B[0].j && .8 < B[0].g && (a1 < 13
                  ? (1 / 0 > T && (T = D + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), B[0].j = 0)
                  : o1
                    || (1 / 0 > T
                      && (T = D + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                      o1 = 1));
              for (let e of O) e.G && (e.h && e.h(N(B1, e.o)), L(e.o, P1, e.H - 1));
              for (let e of B) e.h();
              for (let e of h1) e.h();
              s(), V.b6o(36160, f), V.v5y(0, 0, 128, 128), V.c4s(16640), V.cbf(!0, !1, !0, !1);
              var { x: t, y: e, z: a } = Q;
              V.uae(s("b"), !1, L(N().rotateSelf(0, 180).invertSelf().translateSelf(-t, -e, .3 - a))),
                T1(s("c"), 0, 41),
                V.c4s(256),
                V.cbf(!1, !0, !1, !0),
                V.uae(s("b"), !1, L(N().translateSelf(-t, -e, -a - .3))),
                T1(s("c"), 0, 41),
                V.f1s();
            }
            J = 0,
              N(B1, g),
              A
                ? g.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
                : g.rotateSelf(-Y, -C).invertSelf().translateSelf(-f1, -w, -m1),
              v(),
              V.b6o(36160, n),
              V.v5y(0, 0, 2048, 2048),
              c[0](54.7 * 1.1),
              c[1](126 * 1.1),
              o(),
              V.b6o(36160, null),
              V.v5y(0, 0, V.drawingBufferWidth, V.drawingBufferHeight),
              V.cbf(!0, !0, !0, !0),
              V.c4s(16640),
              V.uae(o("a"), !1, L($)),
              V.uae(o("b"), !1, L(g)),
              V.uae(o("i"), !1, u[0]),
              V.uae(o("j"), !1, u[1]),
              V.ubu(o("k"), f1, w, m1),
              T1(o("c"), !k, 42),
              r(),
              V.ubu(r("j"), V.drawingBufferWidth, V.drawingBufferHeight, t1),
              V.ubu(r("k"), f1, w, m1),
              V.uae(r("b"), !1, L(N(g).invertSelf())),
              V.d97(4, 3, 5123, 0),
              V.b6o(36160, f),
              V.f1s();
          },
          g = new DOMMatrix(),
          a = new DOMMatrix(),
          e = m,
          t = Y1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          v = D1(
            Y1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          r = D1(
            Y1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          s = D1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz+vec3(0,1.49,b[0][0]*.3),1);if(gl_FragCoord.y>36.){float r=1.-sin(gl_FragCoord.x*.02454369),e=clamp(a.z+.6,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?e*(1.-abs(a.x)):0.)*r,vec2(b[0][0]*o.z>0.?e*(1.-r):0.));return;}float r=o.y>.5?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(r),vec2(r>0.?m.w/255.:0.));}`,
          ),
          o = D1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          d = p(8, () => ({})),
          c = p(2, e => {
            let t = V.c25();
            return V.a4v(33984 + e),
              V.b9j(3553, t),
              V.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              V.t2z(3553, 10241, 9729),
              V.t2z(3553, 10240, 9729),
              V.t2z(3553, 34893, 515),
              V.t2z(3553, 34892, 34894),
              V.t2z(3553, 10243, 33071),
              V.t2z(3553, 10242, 33071),
              l => {
                let r = 0, s = 0, o = 0, c = 1 / 0, n = -1 / 0, i = 1 / 0, f = -1 / 0, m = 1 / 0, h = -1 / 0;
                V.fas(36160, 36096, 3553, t, 0),
                  V.c4s(256),
                  N().scale3dSelf(l).multiplySelf(N(e1[e], a).multiplySelf(g).invertSelf());
                for (let a = 0; a < 8; ++a) {
                  let e = d[a],
                    t = (e.x = 4 & a ? 1 : -1, e.y = 2 & a ? 1 : -1, e.z = 1 & a ? 1 : -1, U.transformPoint(e));
                  r -= e.x = (0 | t.x) / l / t.w, s -= e.y = (0 | t.y) / l / t.w, o -= e.z = (0 | t.z) / l / t.w;
                }
                for (N().rotateSelf(298, 139).translateSelf(r / 8, s / 8, o / 8), l = 0; l < 8; ++l) {
                  let { x: e, y: t, z: a } = U.transformPoint(d[l]);
                  c = g1(c, e), n = X(n, e), i = g1(i, t), f = X(f, t), m = g1(m, a), h = X(h, a);
                }
                l = 10 + e,
                  m *= m < 0 ? l : 1 / l,
                  h *= 0 < h ? l : 1 / l,
                  V.uae(
                    v("b"),
                    !1,
                    L(
                      N(B1, a).scaleSelf(2 / (n - c), 2 / (f - i), 2 / (m - h)).translateSelf(
                        (n + c) / -2,
                        (f + i) / -2,
                        (m + h) / 2,
                      ).multiplySelf(U),
                      u[e],
                    ),
                  ),
                  T1(v("c"), !k, 42);
              };
          }),
          n = V.c5w(),
          i = (t = V.c25(), V.c3z()),
          f = V.c5w();
        s(),
          V.uae(s("a"), !1, L(j1(1e-4, 2, 1.4, .4))),
          o(),
          V.ubh(o("q"), 2),
          V.ubh(o("h"), 1),
          V.ubh(o("g"), 0),
          r(),
          V.ubh(r("q"), 2),
          V.b6o(36160, n),
          V.d45([0]),
          V.r9l(0),
          V.b6o(36160, f),
          V.bb1(36161, i),
          V.r4v(36161, 33190, 128, 128),
          V.f8w(36160, 36096, 36161, i),
          V.a4v(33986),
          V.b9j(3553, t),
          V.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null),
          V.fas(36160, 36064, 3553, t, 0),
          V.b9j(3553, V.c25()),
          V.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, e),
          V.t2z(3553, 10241, 9987),
          V.t2z(3553, 10240, 9729),
          V.gbn(3553),
          V.e8z(2929),
          V.e8z(2884),
          V.c70(1),
          V.c7a(1029),
          V.d4n(515),
          V.c5t(0, 0, 0, 0),
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
                b4.innerHTML = "Music: " + t, A || !t ? K1.disconnect() : K1.connect(O1.destination);
              },
              s = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                $ = j1(.3, 181, e, 1.732051),
                  e1 = [j1(.3, 55, e, 1.732051), j1(55, 181, e, 1.732051)],
                  f = g = void 0,
                  r.length =
                    J =
                    l =
                    b =
                    S =
                    n1 =
                    i1 =
                      0;
              },
              o = (e, t = 0) => {
                if (A !== e) {
                  A = e, k = t, s(), I1(), document.body.className = e ? "l m" : "l";
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
                if (!A && (e.target === hC && (J = 1), k)) {
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
                    (r[t] = !!e.type[5] && !0) && (0 === t && (J = 1), 1 === t && o(!0)));
              },
              onmousemove = ({ movementX: e, movementY: t }) => {
                k && (e || t) && (C += .1 * e, Y += .1 * t);
              },
              hC.ontouchstart = l => {
                if (!A) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    k && e > hC.clientWidth / 2
                      ? void 0 === g && (v = 0, h = e, u = t, g = a, d = C, p = Y)
                      : void 0 === f && (m = 0, n = e, i = t, f = a);
                  }
                  e = t1;
                }
              },
              hC.ontouchmove = l => {
                let r, s, o, c;
                if (!A) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    g === a && (C = d + (e - h) / 2.3, Y = p + (t - u) / 2.3, v = 1),
                      f === a
                      && (a = (n - e) / 20,
                        r = P(a),
                        s = (i - t) / 20,
                        o = P(s),
                        (c = .5 < X(r, o)) && (m = 1),
                        b = (c && .2 < r) * R(a, -1),
                        S = (c && .2 < o) * R(s, -1),
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
                t.target === hC && a && e && .02 < (t = t1 - e) && t < .7 && (J = 1);
              },
              Z = () => {
                n1 = S + (r[4] ? 1 : 0) - (r[5] ? 1 : 0), i1 = b + (r[2] ? 1 : 0) - (r[3] ? 1 : 0);
                let a = navigator.getGamepads()[0];
                if (a) {
                  let e = e => t[e]?.pressed || 0 < t[e]?.value ? 1 : 0, t = a.buttons;
                  a = a.axes,
                    k && (Y += H * y1(a[3], .3) * 80, C += H * y1(a[2], .3) * 80),
                    n1 += e(12) - e(13) - y1(a[1], .2),
                    i1 += e(14) - e(15) - y1(a[0], .2),
                    e(9) && o(!0),
                    (a = e(3) || e(2) || e(1) || e(0)) && !l && (J = 1),
                    l = a;
                }
              },
              document.onvisibilitychange = onblur = onresize = s,
              o(!0);
          })(),
          (() => {
            let u,
              s,
              o,
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
              b = 1,
              S = 2,
              A = 2,
              M = () => (S ? B[l1].s : O[s && 1 === O[s].G && s || 0]).o,
              I = e => {
                let { x: t, y: a, z: l } = 1 < S
                  ? N(B[l1].s.o).multiplySelf(B[l1].o).transformPoint({ x: 0, y: l1 || .9 < y ? 15 : 1, z: -2.4 })
                  : M().transformPoint(x1);
                e && (f = (t - Q.x) / H, m = (l - Q.z) / H), Q.x = t, Q.y = a, Q.z = l;
              },
              F = (e, t, a) => {
                N(M()).invertSelf(),
                  U.m41 = U.m42 = U.m43 = 0,
                  e = U.transformPoint({ x: e, z: a, w: 0 }),
                  x1.x += e.x,
                  x1.y += t,
                  x1.z += e.z,
                  I();
              },
              j = (e, t, a, l) => q(e, t, b || (R(P(t - e) ** .5 - a) + 1 / 7) * (1 - N1(-1.5 * l * H)));
            O[37].h = e => {
              let t;
              I(u),
                V.r9r(0, 0, 128, 128, 6408, 5121, R1),
                (() => {
                  let t, e, a, l, r, s, o = 0, c = 0, n = 0, i = 0, f = -1, m = 0, h = 0;
                  for (t = 0; t < 36; ++t) {
                    for (e = 512 * t, a = 96; a < 416; a += 4) {
                      for (l = 0; l < 2; ++l) {
                        (r = R1[e + a + l]) > i && (i = r),
                          r + (s = R1[e + a + l + 2]) && (f < 0 || f === t)
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
                        s = R1[l + r];
                        let e = R1[l + r + 2];
                        (r ? 64 < a : a < 64) ? c = X(c, s) : n = X(n, s), r ? t = X(t, e) : f = X(f, e);
                      }
                    }
                    P(n - c) > P(m) && (m = n - c), P(t - f) > P(h) && (h = t - f);
                  }
                  F(m / 255, i / 255, h / 255);
                })(),
                !S && u === s || (s = u, a = N(M()).invertSelf().transformPoint(Q), x1.x = a.x, x1.y = a.y, x1.z = a.z),
                S = S && (u ? 0 : 1);
              var { x: a, y: l, z: r } = Q;
              l < (a < -20 || r < 109 ? -25 : -9) && (S = 2),
                1 === u && (B[9].j = a < -15 && r < 0 ? 1 : 0),
                g = q(E(g, l, 2), l, S || 8 * P(g - l)),
                d = j(d, g, 2, 1),
                v = j(v, a, .5, 1),
                p = j(p, r, .5, 1),
                i = E(i, z * (27 < u && u < 32), 2),
                k
                  ? (l = S + (1 - N1(-18 * H)), f1 = q(f1, a, l), w = q(w, g + 1.5, l), m1 = q(m1, r, l), C = v1(C))
                  : (m1 = j(m1, p + -18 + 5 * i, 1, 2 + i),
                    w = j(w, X(d + R((-60 - r) / 8, 0, 20) + 13 + 9 * i, 6), 4, 2),
                    f1 = j(f1, v, 1, 2 + i),
                    l = g1(-6, -P(p - m1)),
                    C = z1(C, 90 - v1(q1(l, t = v - f1) / W1), b + (1 - N1(-10 * H))),
                    Y = z1(Y, 90 - q1(L1(l, t), w - d) / W1, b + (1 - N1(-10 * H)))),
                Y = R(Y, -87, 87),
                b = 0,
                e.translateSelf(a, g, r).rotateSelf(0, c),
                l = R(n1, -1),
                t = R(i1, -1),
                e = y1(L1(l, t) ** .5, .1),
                a = q1(l, t),
                l = e * P(l) * K(a),
                t = e * P(t) * G(a),
                e && (o = 90 - a / W1),
                n = E(n, e, 10),
                c = z1(c, o, 1 - N1(-8 * H)),
                f = u || S ? 0 : E(f, 0, 3),
                m = u || S ? 0 : E(m, 0, 3),
                h = S ? 0 : E(h, u ? 7 * R(2 * e) : 0, u ? 9 : 1),
                a = k ? (180 - C) * W1 : 0,
                A = u ? 5 : E(A, S ? 13 : 20, 4),
                document.getElementById("dbg").innerHTML = A.toFixed(2),
                F(H * (f + h * (t * G(a) - l * K(a))), -A * H, H * (m + h * (t * K(a) + l * G(a))));
            },
              [39, 38].map((e, t) =>
                O[e].h = e =>
                  N(O[37].o, e).translateSelf(0, n * R(.45 * K(9.1 * D - W * t - W / 2))).rotateSelf(
                    n * K(9.1 * D - W * t) * .25 / W1,
                    0,
                  )
              );
          })(),
          requestAnimationFrame(l);
      }
    },
    m = new Image();
  m.onload = m.onerror = a,
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
                d = W * 2 ** (l - 8) / m,
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
                          f = new Int32Array(D + T + q);
                        for (let t = 0, a = 0; D + T + q > t; ++t, ++a) {
                          let e = 1;
                          D > t ? e = t / D : D + T > t || (e = (1 - (e = (t - D - T) / q)) * 3 ** (-C / 16 * e)),
                            a < 0
                            || (a -= 4 * m,
                              r = .00396 * 2 ** ((c + M - 256) / 12),
                              l = .00396 * 2 ** ((c + j - 256) / 12) * (1 + (L ? 0 : .0072))),
                            f[t] = 80
                                * (n(s += r * e ** (I / 32)) * A + i(o += l * e ** (k / 32)) * F
                                  + (Y ? (2 * E1() - 1) * Y : 0))
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
                      && (o = .00308 * H,
                        1 !== L && 4 !== L || (o *= K(v * h * W * 2) * R / 512 + .5),
                        o = 1.5 * K(o),
                        n += o * i,
                        i += o * (s = (1 - O / 255) * (e - i) - n),
                        e = 4 === L ? i : 3 === L ? s : n,
                        L || (e = (e *= 22e-5) < 1 ? -1 < e ? K(e / 4 * W * 2) : -1 : 1, e /= 22e-5),
                        e *= B / 32,
                        c = 1e-5 < e * e,
                        r = e * (1 - (s = K(d * h) * Q / 512 + .5)),
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
            [A, M, I, F, j, k, Y, D, T, t, C, a, H, O, B, Q, l, P, X, R] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][L],
            q = 4 * t ** 2;
          e(5513), e(4562), e(3891), C1(++L < 5 ? s : r);
        },
        e = O1.createBuffer(2, 5362944, 44100),
        N = e.getChannelData(0),
        E = e.getChannelData(1);
      K1.buffer = e, K1.loop = !0, C1(s);
    })(() => {
      C1(() => {
        let s,
          t = 0,
          l = [],
          o = [],
          c = [],
          n = [],
          r = e => {
            let { x: t, y: a, z: l } = s[e], r = (h[0] = t, h[1] = a, h[2] = l, f.get(e = "" + (s.D ? m : i)));
            return void 0 !== r
              ? (t = 3 * r, n[t] = (n[t++] + i[5]) / 2, n[t] = (n[t++] + i[6]) / 2, n[t] = (n[t] + i[7]) / 2)
              : (f.set(e, r = f.size), o.push(t, a, l, h[3]), c.push(i[4]), n.push(i[5], i[6], i[7])),
              r;
          },
          i = new Int32Array(8),
          f = new Map(),
          m = new Int32Array(i.buffer, 0, 5),
          h = new Float32Array(i.buffer);
        for (let e of O) {
          for (s of (h[3] = 40 === e.H ? -14 : e.G && e.H, e.u)) {
            let { x: e, y: t, z: a } = w1(s);
            i[4] = 0 | s.A, i[5] = 32767 * e, i[6] = 32767 * t, i[7] = 32767 * a;
            for (let e = 2, t = r(0), a = r(1); s.length > e; ++e) l.push(t, a, a = r(e));
          }
          e.u = null, e.v = t, e.F = t = l.length;
        }
        V.b11(34962, V.c1b()),
          V.b2v(34962, new Float32Array(o), 35044),
          V.v7s(0, 4, 5126, !1, 0, 0),
          V.b11(34962, V.c1b()),
          V.b2v(34962, new Int16Array(n), 35044),
          V.v7s(1, 3, 5122, !0, 0, 0),
          V.b11(34962, V.c1b()),
          V.b2v(34962, new Uint32Array(c), 35044),
          V.v7s(2, 4, 5121, !0, 0, 0),
          V.b11(34963, V.c1b()),
          V.b2v(34963, new Uint16Array(l), 35044),
          V.e3x(0),
          V.e3x(1),
          V.e3x(2),
          C1(a);
        try {
          let [a, l, e, t, r] = JSON.parse(localStorage.DanteSP22);
          B.map((e, t) => e.g = e.i = e.j = t ? 0 | a[t] : 0),
            h1.map((e, t) => e.j = 0 | l[t]),
            l1 = e,
            c1 = r,
            D = t,
            H = 0;
        } catch {}
        y = R(l1);
      });
      let t = p(11, e => i(K(e / 10 * W), e / 10).rotate(+e).scale(1.0001 - e / 10, 0, 1 - e / 10)),
        n = p(10, e => o(s(d1(18), t[e]).reverse(), s(d1(18), t[e + 1]), 1)).flat();
      I(() => M([u1.slice(1)], i(-2).scale3d(3).rotate(90, 0)), 0),
        I(() => {
          let e = (t, a, l) =>
              I(e => {
                e.h = e => e.translateSelf(r() * K(3 * t + D * t) * a),
                  u1.map(({ x: e, z: t }) => {
                    M(v(11, 1), i(4 * e, 4, l + 4 * t).scale(.8, 3, .8), S(.5, .3, .7, .6)),
                      M(v(), i(4 * e, 7, l + 4 * t).scale(1, .3), S(.5, .5, .5, .3));
                  }),
                  M(b(
                    g(v(), i(0, 0, l).scale(5, 1, 5), S(.8, .8, .8, .3)),
                    ...[-1, 1].map(e => g(v(), i(5 * e, .2, l).rotate(-30 * e).scale(4, 1, 2), S(.8, .8, .8, .3))),
                  )),
                  M(v(), i(0, -3, l).scale(8, 2, 8), S(.4, .4, .4, .3));
              }),
            t = (e, t, a, l) =>
              e.translateSelf(t + K(D + 2) / 5, a + K(.8 * D) / 3, l).rotateSelf(2 * K(D), K(.7 * D), K(.9 * D)),
            a = e =>
              b(
                g(v(), i(0, -e / 2).scale(6, e - 1, 2.2)),
                g(v(), i(0, -e / 2 - 6).scale(4, e - 3, 4)),
                g(v(32, 1), i(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            r = () => g1(B[2].i, 1 - B[4].i),
            l = b(
              g(v(30, 1, 1.15, 1), i(0, -3).scale(3.5, 1, 3.5), S(.7, .4, .25, .7)),
              g(v(30, 1, 1.3, 1), i(0, -2.5).scale(2.6, 1, 3), S(.7, .4, .25, .2)),
              g(v(), i(4, -1.2).scale3d(2), S(.7, .4, .25, .3)),
            ),
            s = p(7, e => g(v(6, 1), i(4 * (e / 6 - .5), 3).scale(.2, 3, .2), S(.3, .3, .38))).flat(),
            o = (I(e => {
              e.h = e => t(e, -12, 4.2, 40 * y - 66), M(l), F(i(0, -3, 4));
            }),
              F(i(-5.4, 1.5, -19).rotate(0, -90)),
              M(v(), i(0, 0, 0).scale(1, 5, 1), S(.3, .3, .38)),
              M(v(), i(3, 0, 3).scale(1, 5, 1).rotate(0, 45), S(.3, .3, .38)),
              j(i(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              j(i(0, 2.8), [5, 10, 3], [-5, 10, 3], ...d1(18).map(({ x: e, z: t }) => [7 * e, 10 * t, 4.5 - 2 * P(e)])),
              M(v(), i(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), S(.8, .8, .8, .2)),
              u1.map(({ x: e, z: t }) => M(v(6), i(3 * e, 3, 15 * t).scale(.7, 4, .7), S(.6, .3, .3, .4))),
              M(v(), i(0, 0, -23).scale(3, 1, 8), S(.9, .9, .9, .2)),
              M(v(), i(0, 0, 22).scale(3, 1, 8), S(.9, .9, .9, .2)),
              [-15, 15].map((t, a) => {
                M(v(), i(0, 6.3, t).scale(4, .3, 1), S(.3, .3, .3, .4)),
                  M(v(), i(0, 1, t).scale(3, .2, .35), S(.5, .5, .5, .3)),
                  I(e => {
                    e.h = e => e.translateSelf(0, 0, t).scaleSelf(1, R(1.22 - B[a + 1].g), 1), M(s);
                  });
              }),
              p(5, t =>
                p(2, e =>
                  M(
                    n,
                    i(18.5 * (e - .5), 0, 4.8 * t - 9.5).rotate(0, 180 - 180 * e).scale(1.2, 10, 1.2),
                    S(1, 1, .8, .2),
                  ))),
              M(v(), i(3, 1.5, -20).scale(.5, 2, 5), S(.7, .7, .7, .2)),
              M(v(), i(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), S(.75, .75, .75, .2)),
              M(v(5), i(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), S(.6, .3, .3, .4)),
              M(v(), f(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), S(.8, .2, .2, .5)),
              M(b(
                d(
                  g(v(6, 0, 0, .3), i(8, -3, -4).scale(13, 1, 13), S(.7, .7, .7, .2)),
                  g(v(6), i(0, -8).scale(9, 8, 8), S(.4, .2, .5, .5)),
                  g(v(6, 0, 0, .3), i(0, -.92).scale(13, 2, 13), S(.8, .8, .8, .2)),
                ),
                g(v(5), u(5, 30, 5), S(.4, .2, .6, .5)),
                g(v(5, 0, 1.5), i(0, 1).scale(4.5, .3, 4.5), S(.7, .5, .9, .2)),
                g(v(), f(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), S(.5, .5, .5, .5)),
                g(v(6), i(15, -1.5, 4).scale(3.5, 1, 3.5), S(.5, .5, .5, .5)),
              )),
              I(e => {
                e.h = e =>
                  e.translateSelf(
                    0,
                    .01 < B[3].g ? (5 * G(1.5 * D) + 2) * B[3].i * (1 - B[2].g) + -15 * (1 - B[3].g) : -500,
                    0,
                  ),
                  M(v(5), i(0, -.2).scale(5, 1, 5), S(.6, .65, .7, .3)),
                  F(i(0, 1.2));
              }),
              F(i(15, -2, 4)),
              e(.7, 12, 35),
              e(1, 8.2, 55),
              I(e => {
                e.h = e => e.translateSelf(r() * K(D / 1.5 + 2) * 12),
                  M(
                    b(
                      d(
                        g(v(), u(1.5, 1, 5), S(.9, .9, .9, .2)),
                        g(v(6), u(4, 1, 5), S(.9, .9, .9, .2)),
                        g(v(), i(0, -2).scale(2, 3.2, 1.9), S(.3, .8, .5, .5)),
                        g(v(16, 1, 0, 4), u(1, 1, 1.5).rotate(0, 90), S(.9, .9, .9, .2)),
                      ),
                      g(v(), u(1.3, 10, 1.3), S(.2, .7, .4, .6)),
                    ),
                    i(0, 0, 45),
                  ),
                  j(i(0, 2.8, 45), [0, 0, 4.5]);
              }),
              M(v(), i(-18.65, -3, 55).scale(2.45, 1.4, 2.7), S(.9, .9, .9, .2)),
              I(e => {
                e.h = e => e.translateSelf(9.8 * (1 - r())),
                  M(v(3), i(-23, -1.7, 55.8).scale(5, .7, 8.3), S(.3, .6, .6, .2)),
                  M(v(8), i(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), S(.8, .8, .8, .2)),
                  M(v(), i(-23, -3, 55).scale(5.2, 1.7, 3), S(.5, .5, .5, .3)),
                  M(v(), i(-23, -2.2, 62).scale(3, 1, 4), S(.5, .5, .5, .3)),
                  F(i(-23, -.5, 66.5));
              }),
              I(e => {
                e.h = e => e.translateSelf(0, R(1 - 5 * r()) * h(B[4].g, B[5].g) * K(1.35 * D) * 4),
                  M(v(), i(-22.55, -3, 55).scale(1.45, 1.4, 2.7), S(.7, .7, .7, .2)),
                  M(b(g(v(), u(3, 1.4, 2.7)), g(v(), u(1.2, 8, 1.2))), i(-33, -3, 55), S(.7, .7, .7, .2));
              }),
              I(e => {
                e.h = e => e.translateSelf(0, 0, R(1 - 5 * r()) * h(B[4].g, B[5].g) * K(.9 * D) * 8),
                  M(b(
                    g(v(), i(-27, -3, 55).scale(3, 1.4, 2.7), S(.9, .9, .9, .2)),
                    g(v(), i(-27, -3, 55).scale(1, 3), S(.9, .9, .9, .2)),
                  )),
                  M(v(), i(-39, -3, 55).scale(3, 1.4, 2.7), S(.9, .9, .9, .2));
              }),
              I(e => {
                e.h = e => e.translateSelf(0, -6.5 * B[4].i),
                  M(v(6), i(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), S(.7, .7, .7, .4));
              }),
              F(i(-55, -1.1, 46).rotate(0, 90)),
              M(v(6), i(-61.3, -2.4, 49).scale(3, 1, 5), S(.4, .6, .6, .3)),
              M(v(7), i(-57, -2.6, 46).scale(4, 1, 4), S(.8, .8, .8, .3)),
              [
                ...g(v(), i(0, -3).scale(11, 1.4, 3), S(.9, .9, .9, .2)),
                ...b(
                  g(v(6), f(90).scale(6, 8, 6), S(.3, .6, .6, .3)),
                  g(v(4, 0, .01), i(0, 6).scale(12, 2, .75).rotate(0, 45), S(.3, .6, .6, .3)),
                  g(v(6), f(90).scale(5, 12, 5), S(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(e => g(v(5), i(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), S(.3, .6, .6, .3))),
                ),
              ]),
            c = (M(o, i(-53, 0, 55)),
              I(e => {
                e.h = e =>
                  e.translateSelf(-75, (1 - B[5].i) * (1 - B[6].g) * 3, 55).rotateSelf(180 * (1 - B[5].i) + x, 0), M(o);
              }, 2),
              M(v(), i(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), S(.7, .7, .7, .2)),
              M(v(3, 0, -.5), i(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), S(.8, .8, .8, .2)),
              M(b(
                d(
                  g(v(), i(-100, -2.4, 55).scale(8, .9, 8), S(.8, .8, .8, .2)),
                  g(v(), i(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), S(.8, .8, .8, .2)),
                  g(v(), i(-100, -2.6, 70).scale(3, 1.1, 7), S(.8, .8, .8, .2)),
                  g(v(), i(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), S(.8, .8, .8, .2)),
                  g(v(6), i(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), S(.6, .6, .6, .3)),
                  g(v(), i(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), S(.8, .8, .8, .2)),
                  g(v(), i(-100, .42, 92).scale(3, 1.1, 4.1), S(.8, .8, .8, .2)),
                ),
                g(v(8), i(-100, -1, 55).scale(7, .9, 7), S(.3, .3, .3, .4)),
                g(v(8), i(-100, -2, 55).scale(4, .3, 4), S(.4, .4, .4, .5)),
                g(v(8, 0, -3.1), i(-100, -3, 55).scale(.4, 1, .4), S(.4, .4, .4, .5)),
              )),
              j(i(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              j(i(-89, .2, 80), [0, 0, 6]),
              M(b(
                g(v(), i(-100, 1, 63).scale(7.5, 4), S(.5, .5, .5, .4)),
                g(v(), i(-100, 0, 70).scale(2, 2, 10), S(.5, .5, .5, .4)),
                g(v(20, 1), i(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), S(.5, .5, .5, .4)),
              )),
              I(e => {
                e.h = e => e.translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, R(1.1 - B[6].g), 1), M(s);
              }),
              u1.map(({ x: t, z: a }) => {
                M(v(6), i(7 * t - 100, -3, 7 * a + 55).scale(1, 8.1), S(.6, .15, .15, .8)),
                  [4, -.4].map(e => M(v(6), i(7 * t - 100, e, 7 * a + 55).scale(1.3, .5, 1.3), S(.4, .2, .2, .8)));
              }),
              p(7, e => {
                M(
                  v((23 * e + 1) % 5 + 5, 0, .5),
                  i(5 * K(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
                  S(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
                );
              }),
              M(v(), i(-87, -9.5, 24).scale(7, 1, 3), S(.4, .5, .6, .4)),
              M(v(4), i(-86, -9.2, 27).scale(5, 1, 5), S(.5, .6, .7, .3)),
              M(v(12, 1), i(-86, -9, 31).scale(1.5, 1, 1.5), S(.3, .3, .4, .1)),
              F(i(-86, -7.5, 31)),
              I(e => {
                e.h = e => e.translateSelf(0, 3.5 * (1 - X(B[6].g, B[7].g)) + h(B[7].i, B[6].i) * K(D) * 5),
                  [0, 12, 24].map(e =>
                    M(
                      v(),
                      i(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -3).skewX(-3).scale(2.8, 1.4, 3),
                      S(.2, .5, .6, .2),
                    )
                  );
              }),
              I(e => {
                e.h = e => e.translateSelf(0, h(B[7].i, B[6].i) * K(D + 3) * 6, 6 * K(.6 * D + 1) * h(B[7].i, B[6].i)),
                  [6, 18].map(e =>
                    M(
                      v(),
                      i(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -3).skewX(-3).scale(2.8, 1.4, 3),
                      S(.1, .4, .5, .2),
                    )
                  );
              }),
              M(
                b(
                  d(
                    g(v(5), i(0, 0, -7).scale(2, 1.2, 2), S(.2, .4, .7, .3)),
                    g(v(5), u(9, 1.2, 9), S(0, .2, .3, .5)),
                    g(v(), u(11, 1, 13), S(.3, .4, .6, .3)),
                  ),
                  g(v(5), u(5.4, 5, 5.4), S(0, .2, .3, .5)),
                ),
                i(-38.9, -11.3, 17),
              ),
              F(i(-38.9, -9.6, 10)),
              I(e => {
                e.h = e => e.translateSelf(0, -7.3 * B[7].i),
                  M(
                    b(
                      d(
                        g(v(5), i(0, 2).scale(5, 7, 5).skewY(8), S(.2, .4, .5, .5)),
                        g(v(5), i(0, 6).scale(1.1, 7, 1.1).skewY(-8), S(.25, .35, .5, .5)),
                        g(v(5), i(0, 9).scale(.6, 7, .6).skewY(8), S(.35, .3, .5, .5)),
                      ),
                      g(v(5), u(4, 8, 4), S(.2, .4, .5, .5)),
                      g(v(5), i(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), S(.2, .4, .5, .5)),
                    ),
                    i(-38.9, -11.3, 17),
                  ),
                  j(i(-39.1, -.6, 17).rotate(11), ...d1(15).map(({ x: e, z: t }) => [3 * e, 3 * t, 1.2]));
              }),
              u1.map(({ x: t, z: a }) => {
                M(v(14, 1), i(9 * t - 38.9, -7.3, 11 * a + 17).scale(1, 4), S(.25, .25, .25, 1)),
                  [1.5, 8].map(e =>
                    M(v(17, 1), i(9 * t - 38.9, e - 11.3, 11 * a + 17).scale(1.5, .5, 1.5), S(.6, .6, .6, .3))
                  );
              }),
              M(
                b(
                  d(
                    g(v(6), i(0, 0, -36).scale(15, 1.2, 15), S(.7, .7, .7, .3)),
                    g(v(), i(0, 0, -18).scale(4, 1.2, 6), S(.45, .4, .6, .3)),
                  ),
                  ...p(6, t =>
                    p(6, e =>
                      g(
                        v(6),
                        i(4.6 * e - 12 + 2 * (1 & t), 0, 4.6 * t - 50 + 2 * K(4 * e)).scale(2, 5, 2),
                        S(.7, .7, .7, .3),
                      ))).flat(),
                ),
                i(-38.9, -11.3, 17),
              ),
              j(i(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              M(v(5), i(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), S(.8, .1, .25, .4)),
              F(i(-84, -.5, 85).rotate(0, 45)),
              I(e => {
                e.h = e => t(e, -123, 1.4, 55 + -65 * c1), M(l), F(i(0, -3, -4).rotate(0, 180));
              }),
              b(
                g(v(), i(0, -.5, 1).scale(1.15, 1.2, 6.5), S(.25, .25, .35, .3)),
                g(v(3), i(0, 0, -5.5).scale(3, 2), S(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(e => g(v(), i(e, -.5, 1).scale(.14, .3, 6.5), S(.7, .2, 0, .3))),
              ));
          I(e => {
            e.h = e => e.translateSelf(0, -2, h(B[10].g, B[11].g) * P(K(1.1 * D)) * -8.5 + 10),
              p(2, e => M(c, i(9 * e - 110 + (1 & e), 1.7, -12)));
          }),
            I(e => {
              e.h = e => e.translateSelf(0, -2, h(B[10].g, B[11].g) * P(K(2.1 * D)) * -8.5 + 10),
                p(2, e => M(c, i(9 * (e + 2) - 110 + (1 & e), 1.7, -12)));
            }),
            I(e => {
              e.h = e =>
                e.translateSelf(
                  0,
                  -2,
                  -8.5 * X((1 - B[10].g) * (1 - h(B[10].g, B[11].g)), h(B[10].g, B[11].g) * P(K(1.5 * D))) + 10,
                ), p(3, e => M(c, i(9 * e - 106, 1.7, -12)));
            }),
            M(
              b(
                d(g(v(), i(26.5, -1.6, 10).scale(20, 2.08, 3)), g(v(), i(26.5, -.6, 10).scale(19, 2, .5))),
                ...p(4, e => g(v(), i(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
                ...p(3, e => g(v(), i(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              i(-123, 0, -12),
              S(.5, .5, .6, .2),
            ),
            F(i(-116, -1.4, -18).rotate(0, 180)),
            M(v(), i(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), S(.8, .8, .8, .2)),
            M(v(6), i(-116, -2.6, -16.5).scale(3.2, .8, 3), S(.6, .5, .7, .2)),
            M(v(), i(-115.5, -17, -12).scale(.5, 15, 2.2), S(.6, .6, .6, .3)),
            M(v(8), i(-114, -17, -2).scale(2, 15, 2), S(.6, .6, .6, .3)),
            M(v(8), i(-79, -17, -2).scale(2, 15, 2), S(1, 1, 1, .3)),
            M(v(), i(-77, -17, -50.5).scale(2.2, 15, .5), S(.6, .6, .6, .3)),
            p(3, e => {
              M(a(16), i(12 * e - 109, -9, -12), S(.6, .6, .6, .3)),
                M(a(16), i(-77, -9, -12 * e - 20).rotate(0, 90), S(.6, .6, .6, .3));
            }),
            M(b(
              g(v(12), i(-77, -14.5, -12).scale(4, 17.5, 4), S(.7, .7, .7, .2)),
              g(v(), i(-79, .1, -12).scale(3.5, 2, 1.3), S(.4, .5, .6, .2)),
              g(v(), i(-77, .1, -14).scale(1.5, 2, 2), S(.4, .5, .6, .2)),
              g(v(12), i(-77, 3.1, -12).scale(3, 5, 3), S(.4, .5, .6, .2)),
            )),
            M(v(), i(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), S(.6, .6, .6, .3)),
            M(v(9), i(-98, -18.4, -40).scale(2.5, 13.5, 2.5), S(.5, .5, .5, .3)),
            M(b(
              g(v(), i(-93, -5.8, -40).scale(9, 1, 5), S(.8, .8, .8, .1)),
              g(v(9), i(-98, -5.8, -40).scale(3, 8, 3), S(.7, .7, .7, .2)),
            )),
            F(i(-98, -4.4, -40).rotate(0, 90)),
            j(i(-115, .2, -12), [0, 0, 3.5]),
            j(i(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            M(b(
              d(
                g(v(6, 0, 0, .6), i(-100, .7, 105.5).scale(8, 1, 11), S(.7, .7, .7, .2)),
                g(v(), i(-101.5, .7, 93.5).scale(10.5, 1, 2), S(.7, .7, .7, .2)),
              ),
              g(v(5), i(-100, .7, 113).scale(4, 3, 4), S(.7, .7, .7, .2)),
            )),
            p(4, a =>
              I(e => {
                e.h = e => {
                  let t = h(B[8].i, B[12].i);
                  e.translateSelf(
                    (2 < a ? 2 * (1 - t) + t : 0) - 100,
                    t * K(1.3 * D + 1.7 * a) * (3 + a / 3) + .7,
                    115 + (1 & a ? -1 : 1) * (1 - B[8].i) * (1 - B[12].i) * -7
                      + X(t, .05) * G(1.3 * D + 7 * a) * (4 - 2 * (1 - a / 3)),
                  );
                },
                  M(
                    v(6),
                    i(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.5 - .1, -21.5).rotate(0, 0, 4).skewX(4).scale(
                      2.6,
                      1,
                      2.5,
                    ),
                    S(.5 - a / 8, a / 12 + .5, .7, .3),
                  );
              })),
            I(e => {
              e.h = e => {
                let t = h(B[8].i, B[12].i);
                e.translateSelf(2.5 * (1 - t) - 139.7, -3 * (1 - B[8].g) + t * K(.8 * D) * -1 - 1.8, 93.5).rotateSelf(
                  G(1.3 * D) * (3 * t + 3),
                  0,
                );
              },
                M(b(g(v(10), u(6, 2, 6), S(.1, .6, .5, .3)), g(v(10), u(3.3, 6, 3.3), S(.1, .6, .5, .5)))),
                M(v(15, 1), i(-7.5).rotate(0, 90).scale(3, 2.3, 3), S(.4, .4, .4, .3)),
                M(v(10), i(-7.5).rotate(0, 90).scale(2, 2.5, 2), S(.3, .8, .7, .3)),
                M(v(5), i(-7.5).rotate(0, 90).scale(1, 3), S(.5, .5, .5, .5)),
                F(i(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(e =>
                  M(n, f(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), S(1, 1, .8, .2))
                ),
                j(i(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            I(e => {
              e.h = e => e.translateSelf(-100, .6, 96.5).scaleSelf(.88, 1.2 - B[12].g), M(s);
            }),
            [-1, 1].map(t => {
              [7.2, 1.5].map(e => M(v(15, 1), i(-7.5 * t - 100, e + .7, 96).scale(1.1, .5, 1.1), S(.5, .24, .2, .4))),
                M(n, i(-5 * t - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * t - 90), S(1, 1, .8)),
                M(v(12, 1), i(-7.5 * t - 100, 3.7, 96).scale(.8, 4, .8), S(.6, .24, .2, .5)),
                M(
                  b(
                    g(v(), i(-4 * t, 3.5, -.5).scale(4, 4, .7), S(.5, .5, .5, .4)),
                    g(v(), u(3, 3, 10), S(.6, .24, .2, .5)),
                    g(v(28, 1), i(0, 3, -5).scale(3, 4, 10).rotate(90, 0), S(.6, .24, .2, .5)),
                    g(v(5), i(-5.3 * t, 7).rotate(90, 0).scale(1.7, 5, 1.7), S(.6, .24, .2, .5)),
                    g(v(5), i(-5.3 * t, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), S(.6, .24, .2, .5)),
                  ),
                  i(t - 100, .7, 97),
                );
            }),
            M(b(
              g(v(), i(-82.07, .8, 106).scale(11, .9, 2.2), S(.7, .7, .7, .1)),
              g(v(45, 1), i(-81, .7, 106).scale3d(7.7), S(.7, .7, .7, .1)),
            )),
            I(e => {
              e.h = e => e.translateSelf(-81, .6, 106).rotateSelf(0, 40 + r1),
                M(b(
                  g(v(45, 1), u(7.5, 1, 7.5), S(.45, .45, .45, .2)),
                  g(v(), i(0, 0, -5.5).scale(1.5, 3, 2.7), S(.45, .45, .45, .2)),
                )),
                M(v(8), i(0, 2).scale(3, 1.5, 3).rotate(0, 22), S(.7, .7, .7, .1)),
                M(v(5), i(0, 2).scale(1, 2), S(.3, .3, .3, .2)),
                j(i(0, 3), ...d1(14).map(({ x: e, z: t }) => [5.6 * e, 5.6 * t, 2]));
            }),
            I(e => {
              e.h = e => e.translateSelf(-65.8, .8, 106).rotateSelf(0, s1),
                [-1, 1].map(e =>
                  M(n, f(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), S(1, 1, .8))
                ),
                M(b(g(v(28, 1), i(0, 2).scale(7.5, 1, 7.5), S(.35, 0, 0, .3)), g(v(), u(9, 5, 2), S(.3, 0, 0, .3)))),
                M(g(v(28, 1), u(7.5, 1, 7.5), S(.45, .45, .45, .2))),
                M(g(v(5), i(0, 1).scale(1, .2), S(.3, .3, .3, .2)));
            }),
            I(e => {
              e.h = e => e.translateSelf(-50.7, .8, 106).rotateSelf(0, 180 - s1),
                M(b(
                  g(v(28, 1), i(0, 2).scale(7.5, 1, 7.5), S(.35, 0, 0, .3)),
                  g(v(), i(7).scale(9, 5, 2), S(.3, 0, 0, .3)),
                  g(v(), i(0, 0, 7).scale(2, 5, 9), S(.3, 0, 0, .3)),
                )),
                M(g(v(28, 1), u(7.5, 1, 7.5), S(.45, .45, .45, .2))),
                M(g(v(5), i(0, 1).scale(1, .2), S(.3, .3, .3, .2)));
            }),
            I(e => {
              e.h = e => e.translateSelf(-50.7, .8, 91).rotateSelf(0, 270 + s1),
                M(b(
                  g(v(28, 1), i(0, 2).scale(7.5, 1, 7.5), S(.35, 0, 0, .3)),
                  g(v(), i(7).scale(9, 5, 2), S(.3, 0, 0, .3)),
                  g(v(), i(0, 0, -7).scale(2, 5, 9), S(.3, 0, 0, .3)),
                )),
                M(g(v(28, 1), u(7.5, 1, 7.5), S(.45, .45, .45, .2))),
                M(g(v(5), i(0, 1).scale(1, .2), S(.3, .3, .3, .2)));
            }),
            M(v(), i(-58, 1, 106).scale(2, .65, 2), S(.7, .7, .7, .2)),
            M(v(), i(-50.7, 1, 99).scale(2, .65, 1), S(.7, .7, .7, .2)),
            M(v(), i(-42, .4, 91).scale(5, 1, 2.5), S(.7, .7, .7, .3)),
            M(v(), i(-34.2, .4, 91).scale(3, 1, 3), S(.7, .7, .7, .3)),
            F(i(-34, 2.7, 96).rotate(-12, 0)),
            M(v(5), i(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), S(.2, .5, .5, .6)),
            [S(.1, .55, .45, .2), S(.2, .5, .5, .3), S(.3, .45, .55, .4)].map((t, a) =>
              I(e => {
                e.h = e => {
                  e.translateSelf(
                    0,
                    (1 - B[13].i) * (1 - B[14].i) * (a ? 0 : 3) + h(B[13].i, B[14].i) * K(1.5 * D + 1.5 * a) * 4,
                  );
                },
                  M(v(), i(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), t),
                  2 === a && M(v(), i(-29.1, .4, 91).scale(2.1, 1, 3), S(.7, .7, .7, .3)),
                  1 === a && M(v(), i(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), S(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(e => M(n, i(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), S(1, 1, .8))),
            p(3, e =>
              M(
                a(24.7 - .7 * (1 & e)),
                i(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? S(.5, .5, .5, .3) : S(.35, .35, .35, .5),
              )),
            M(b(
              g(v(6, 0, 0, .3), i(0, -.92, 95).scale(14, 2, 14), S(.8, .8, .8, .2)),
              g(v(5), i(0, 0, 95).scale3d(6), S(.3, .3, .3, .5)),
            )),
            F(i(0, 1.7, 82).rotate(0, 180)),
            M(v(5), i(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), S(.5, .3, .3, .4)),
            M(v(6), i(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), S(.5, .6, .7, .3)),
            M(v(), i(0, 16, 129).scale(1.5, 1, 2), S(.5, .6, .7, .3)),
            M(v(7), i(0, 16.2, 133).scale(5, 1, 5), S(.4, .5, .6, .4)),
            M(b(
              d(
                g(v(), i(0, 16, 110.5).scale(12, 1, 3), S(.5, .3, .3, .4)),
                g(v(), i(0, 16, 111).scale(3, 1, 3.8), S(.5, .3, .3, .4)),
              ),
              g(v(5), i(0, 16, 103.5).scale(5.5, 5, 5.5), S(.5, .3, .3, .4)),
            )),
            I(e => {
              e.h = e => e.translateSelf(-2 * K(D)).rotateSelf(25 * K(D)),
                M(v(3), i(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), S(.5, .3, .3, .4)),
                [22, 30].map(e => {
                  M(v(6), i(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), S(.7, .7, .7, .4)),
                    M(v(), i(0, 6.2, e + 95).scale(.5, 11, .5), S(.5, .3, .3, .4));
                });
            }),
            I(e => {
              e.h = e => {
                let t = h(h((B[14].g + B[14].i) / 2, B[13].i), (B[15].g + B[15].i) / 2);
                e.translateSelf(0, 16 * t, 8.5 * R(2 * t - 1) + 95);
              },
                M(v(5), u(5, 1.1, 5), S(.5, .3, .3, .4)),
                M(v(5), u(5.5, .9, 5.5), S(.25, .25, .25, .4)),
                F(i(0, 1.5, -1).rotate(0, 180));
            }),
            j(i(0, 3, 95), ...d1(9).map(({ x: e, z: t }) => [9 * e, 9 * t, 4])),
            j(i(0, 19, 134), [0, 0, 3.5]);
        }),
        I(() => {
          M(l(20), i(0, 1).scale3d(.5), S(1, .3, .4)),
            M(l(30), u(.65, .8, .55), S(1, .3, .4)),
            M(v(), i(0, .9, .45).scale(.15, .02, .06), S(.3, .3, .3)),
            [-1, 1].map(e => {
              M(n, f(0, 0 < e ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), S(1, 1, .8)),
                M(
                  g(b(v(15, 1), g(v(), i(0, 0, 1).scale(2, 2, .5))), f(-90, 0).scale(.1, .05, .1), S(.3, .3, .3)),
                  i(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
                ),
                I(() => {
                  M(v(20, 1), i(.3 * e, -.8).scale(.2, .7, .24), S(1, .3, .4));
                });
            });
        }),
        I(() => {
          M(v(6, 1), u(.13, 1.4, .13), S(.3, .3, .5, .1)),
            M(v(10), i(0, 1).scale(.21, .3, .21), S(1, .5, .2)),
            M(v(3), i(0, -1).rotate(90, 90).scale(.3, .4, .3), S(.2, .2, .2, .1));
        }, 0),
        I(() => {
          M(v(6).slice(0, -1), u(.77, 1, .77), S(1, .3, .5));
        }, 0),
        I(() => {
          M(
            l(30, 24, (e, t, a) => {
              let l = t / 24, r = e * W * 2 / 30, s = K(l ** .6 * W / 2);
              return e = l * l * K(e * W * 14 / 30) / 4,
                23 < t
                  ? { x: a.D = 0, y: -.5, z: 0 }
                  : { x: G(r) * s, y: G(l * W) - l - e, z: K(r) * s + K(e * W * 2) / 4 };
            }),
            u(.7, .7, .7),
            S(1, 1, 1),
          ), [-1, 1].map(e => M(l(12), i(.16 * e, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
