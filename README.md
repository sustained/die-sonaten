# die-sonaten (the-sonatas)

An interactive experience about the 32 Beethoven piano sonatas.

![](/docs/sample.png)

- [Why make this?](#why-make-this) (RATIONALE)
- [What does it do?](#what-does-it-do) (EXPLANATION)
- [Can I use your...?](#can-i-use-your) (RIGHTS/LICENSE)
- [How do I run it?](#how-do-i-run-it) (INSTALLATION/SETUP)

# Why make this?

The 32 Beethoven Sonatas are some of my favourite things in the world.

1. I quite simply want to create something that relates to them.
2. I would like to be able to better make use of animations, transitions and so on.
3. Lately I have been trying to improve my German.

This project then is just something which relates to those three points.

---

Die 32 Beethoven Sonaten sind einige meiner Lieblingssachen.

1. Etwas im Zusammenhang mit die will ich ganz einfach erstellen.
2. Ich möchte auch besser animations, transitions und so weiter benutzen können.
3. In letzer Zeit habe ich mein Deutsch verbessern versuchen.

Diese Projekt ist also nur etwas, das sich alle drei Punkte bezieht.

# What does it do?

So far it just parses some JSON and displays a fancy grid and that's it.

The data I have so far for each sonata is:

- (musical) key
- opus/number
- avg. duration
- nickname (if applicable)
- when it was composed and published
- the movements and their
  - names
  - keys
  - time signatures

The data I don't have yet or am still collecting/compiling:

- the (musical) themes (in MIDI and SVG format)
- interesting anecdotes and such that musicians/historians have to say about the sonatas

Soon it will display this information in a variety of interesting and hopefully rather flashy ways.

# Can I use your...?

Feel free to use:

- the `.hjson` files in `data/sonatas` or the resulting compiled `.json` files in `src/data/sonatas`
- the `.mscz` files in `scores/`

Once it exists, also feel free to use the `.midi` files and the `.svg` files (of the themes).

Consider the rest unlicensed for now, but maybe I'll open-source it eventually.

# How do I run this?

## Installation

```
npm install
```

## Compile sonata data

> **NOTE:** You must manually compile the JSON whenever you change the HJSON source files.

```
npm run compile-json
```

## Run development server

```
npm run serve
```

## Build for production

```
npm run build
```

### Test production build

```
npx http-server dist
```
