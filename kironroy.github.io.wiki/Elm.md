![vue logo](https://kironroy.github.io/elm.svg)

### Reference
* [Haskell Repo](https://github.com/kironroy/kironroy.github.io/wiki/Haskell)
* [Elm Documentation](http://elm-lang.org/)
* [Elm Core Libraries](http://package.elm-lang.org/packages/elm-lang/core/5.1.1/)
* [Elm GitHub](https://github.com/elm-lang)
* [Ellie Online Complier](https://ellie-app.com/new)
* [Elm repl online](http://elmrepl.cuberoot.in/)
***

### Tutorials
* [Evan Czaplicki (zuh p-llH-kee)](https://www.seas.harvard.edu/audiences/alumni/stories/2015/10/alumni-profile-evan-czaplicki-ab-12)
* [Elm Guide](http://elm-lang.org/docs)
* [Elm .pdf](https://www.gitbook.com/book/csmith111/functional-reactive-programming-with-elm/details)
* [hackr.io - Elm](https://hackr.io/tutorials/learn-elm)
* [Elm on Glitch](https://glitch.com/edit/#!/elm-hello-universe?path=README.md:1:0)
* [Elm Repo](https://github.com/kironroy/elm_tutorial)
* [Beginning Elm](http://elmprogramming.com/)
  * [Elm task manager](https://github.com/kironroy/beginning--elm_copy/projects?query=is%3Aclosed)
  * [Elm Repo](https://github.com/kironroy/beginning--elm_copy)
* [ElmBridge](https://elmbridge.github.io/curriculum/)
  * [Elm Bridge Repo](https://github.com/kironroy/elm_bridge)
* [Elm For Beginners](https://courses.knowthen.com/p/elm-for-beginners)
* [Learning Elm, part 1](http://lucasmreis.github.io/blog/learning-elm-part-1/)
* [Learn You an Elm](http://learnyouanelm.github.io/)
***
### YouTube 
* [Evan Czaplicki - Let's be mainstream! User focused design in Elm - Curry On](https://www.youtube.com/watch?v=oYk8CKH7OhE)
***

### Elm Guides
  * [Elm on Glitch](https://glitch.com/edit/#!/elm-hello-universe?path=README.md:1:0)
  * [Elm Guide by pghalliday](https://github.com/kironroy/elm-introduction)
***

### Elm Games 
 * [Elm games](https://itch.io/jam/elm-game-jam-feb-2018)
   * [James Gary](https://github.com/jamesgary/protect-the-egg)

***

### Elm Social
* [Elm Slack](https://elmlang.slack.com/)
* [Elm Meetup LA](https://www.meetup.com/Elm-LA/)
* [Elm Meetup OC](https://www.meetup.com/Elm-OC/)
***

### Terminal 
```elm-reactor``` = http://localhost:8000 

```elm-repl``` = elm read–eval–print loop

``` :exit``` = exit elm-repl 

``` elm-format Main.elm ``` = format code
 
***
### Know Elm
* [Elm For Beginners](https://courses.knowthen.com/p/elm-for-beginners)
  * [KnowThen Elm Repo](https://github.com/kironroy/knowthen_elm)

![vue logo](https://kironroy.github.io/player_app.svg)


* **Model -- data in the app**
* **Update -- handling behavior of the app**
* **View -- creating the UI and generating messages (button clicks)**

####  -- MODEL

*TODO : Model's Shape*

```
Model =
    { players : List Player
    , playerName : String
    , playerId : Maybe Int
    , plays : List Play
    }
```
*TODO: Player Shape*

```
Player =
    { id: Int
    , name : String
    , points : Int
    }
```
*TODO: Play Shape*

```
Play =
    { id: Int
    , playerId : Int
    , name : String
    , points : Int
    }
```
*TODO: Initial Model*

#### -- UPDATE
  * What can be done in our app?
  * User only, not talking to web servers

    * Edit
    * Score
    * Input
    * Save
    * Cancel
    * DeletePlay

    *TODO: Create Message Union Type*

    *TODO: Create update function(s)*

#### -- VIEW
   * **What are the logical sections/groupings of our UI?**

    * main view (outermost function)
      * player section
        * player list header
        * player list
          * player
      * player form
      * play section
        * play list header
        * play list
          * play

*TODO : Create functions for each of the above*


***

### Ellie Online
* **[partial application of functions](https://ellie-app.com/4VCcXyqnba1/11)**
* [wordCount >>](https://ellie-app.com/vF68SzNPa1/13)
* [Function 1](https://ellie-app.com/8njghp6Y9a1/6)
* [Function _](https://ellie-app.com/8MYpZ36yma1/10)
* [Case](https://ellie-app.com/8YkvPnxdNa1/1)
* [Counter -- with comments](https://ellie-app.com/kdv6sVc5a1/12)
* [Counter](https://ellie-app.com/bMrwN48Yxa1/16)
* [Counter2](https://ellie-app.com/h8HTKfhgfa1/0)
* [Counter3](https://ellie-app.com/hfzqh5HQ9a1/0)
* [Palindrome](https://ellie-app.com/mnVMwbNMha1/6)
* [Sign Up](https://ellie-app.com/nKqd867Rfa1/0)
* [Random Number Commands -- with comments](https://ellie-app.com/nwH5cJzja1/15)
* [Event Listener Subscriptions -- with comments](https://ellie-app.com/qh33HGtksa1/5)
* [Cart 1](https://ellie-app.com/45VHpCm3qa1/4)
* [Cart 2 >>](https://ellie-app.com/4gb5sKXZva1/4)
* [Cart Type alias](https://ellie-app.com/4RxkBjYKQa1/3)
* [Calorie Counter init](https://ellie-app.com/4K5Gys8hSa1/17)
* [Calorie Counter with input FAIL](https://ellie-app.com/5rX78bjSNa1/17)
* [Calorie Counter works](https://ellie-app.com/6q5S5ck7qa1/14)
