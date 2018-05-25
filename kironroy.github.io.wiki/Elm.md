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
* [Mac Outreach](http://outreach.mcmaster.ca/src/what-we-do.html)
***

### Terminal/Notes 
```elm-reactor``` = http://localhost:8000 

```elm-repl``` = elm read–eval–print loop

``` :exit``` = exit elm-repl 

``` elm-format Main.elm ``` = format code

```
<function> : List a -> Int
-- "a" is a  type variable, that means it can be any type
-- Functions that have type variables are called polymorphic functions

> List.length ['a', 'b', 'c']
3 : Int

> List.length [1, 2, 3]
3 : Int 

 
``` 

```
Recursion is important to Elm because 
unlike imperative languages, you do computations in Elm by
declaring what something is instead of declaring how you get it. 
That’s why there are no while loops or for loops in Elm and 
instead we many times have to use recursion to declare what something is.
```

```
Folds can be used to implement any function where you
 traverse a list once,
element by element, and then return something based on that.
Whenever you want to traverse a list to return something, 
chances are you want a fold.
That’s why folds are, along with maps and filters,
one of the most useful types of functions in functional programming.
```
***
### Know Elm
* [Elm For Beginners](https://courses.knowthen.com/p/elm-for-beginners)
  * [KnowThen Elm Repo](https://github.com/kironroy/knowthen_elm)
  * *[Scorekeeper App](https://ellie-app.com/r6bFyxBzfa1/1)*

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

*   **[partial application of functions](https://ellie-app.com/jHB4SLz4Sna1)**

*   **[currying simple](https://ellie-app.com/jHC6sfj28Ga1)**

*   **[recursion/pattern matching](https://ellie-app.com/jHCtnHSdvta1)**

    *   [repeat](https://ellie-app.com/jHCVVcZc3Fa1)

    *   [take](https://ellie-app.com/jJhQwrFdvsa1)

    *   [reverse list](https://ellie-app.com/jHLdZzLS4sa1)

    *   [zip](https://ellie-app.com/jHMRZyBLbZa1)

    *   [quicksort](https://ellie-app.com/jHQJxxh3R2a1)

*   **[Let expression](https://ellie-app.com/jHS5yTHqhsa1)**

*   [Let expression - phone #](https://ellie-app.com/jHRqJjw9qRa1)

*   **[anonymous function](https://ellie-app.com/jHTdLj98Vca1)**

*   **[addVectors](https://ellie-app.com/jHTyvdFRcra1)**

*   [member](https://ellie-app.com/jHVZnT96s9a1)

*   [string interpolation/record](https://ellie-app.com/jHXVsHvWFYa1)

*   [maximum](https://ellie-app.com/jHYqBsVFRja1)

*   [Rem](https://ellie-app.com/jHZqGLctcca1)

*   [Learn You an Elm](https://ellie-app.com/jHZPpfNPgha1)

*   [Identity/Max](https://ellie-app.com/jJ2b7kyBzja1)

*   [repeat function](https://ellie-app.com/jJ2tLMmqqwa1)

*   [jimmyTwoTimes](https://ellie-app.com/jJ37vTNNwqa1)

*   [Lucky number 7](https://ellie-app.com/jJ3tMQ2hPwa1)

*   [Ascending Descending Lists](https://ellie-app.com/jJpXpMrf6ma1)

*   [zip partial](https://ellie-app.com/jJ3W7pG6bma1)

*   [flip](https://ellie-app.com/jJ4KZCMX2ja1)

*   [phonebook](https://ellie-app.com/jJkZqhPBNZa1)

*   [locker Err | Ok](https://ellie-app.com/jJ5rq7kNvSa1)

*   [set](https://ellie-app.com/jJ5LWnskN9a1)

*   [wordCount >>](https://ellie-app.com/jJ69t9Hc9ja1)

*   [Collatz sequences](https://ellie-app.com/jJ6vMzGwkPa1)

*   [Case](https://ellie-app.com/8YkvPnxdNa1/1)

*   [Counter -- with comments](https://ellie-app.com/kdv6sVc5a1/12)

*   [Counter](https://ellie-app.com/bMrwN48Yxa1/16)

*   [Counter2](https://ellie-app.com/h8HTKfhgfa1/0)

*   [Counter3](https://ellie-app.com/hfzqh5HQ9a1/0)

*   [Palindrome](https://ellie-app.com/mnVMwbNMha1/6)

*   [Sign Up](https://ellie-app.com/nKqd867Rfa1/0)

*   [Random Number Commands -- with comments](https://ellie-app.com/nwH5cJzja1/15)

*   [Event Listener Subscriptions -- with comments](https://ellie-app.com/jJ9wcGBzj9a1)

*   [Cart 1](https://ellie-app.com/jJbd78TGz5a1)

*   [Cart 2 >>](https://ellie-app.com/jJbyq9vNfKa1)

*   [Cart Type alias](https://ellie-app.com/jJbVRHH8Sda1)

*   [Calorie Counter init](https://ellie-app.com/4K5Gys8hSa1/17)

*   [Meetup Clone](https://ellie-app.com/jJdfHFRcsra1)

*   **[Space Rocket Let If/Else](https://ellie-app.com/jJdxBzPzgda1)**

* **[Mapping functions (Tree example)](https://ellie-app.com/jJNfPsYJzSa1)**

* **[Filtering lists (TV Late Night)](https://ellie-app.com/jK3PrVKgpZa1)**

* [startswith](https://ellie-app.com/jKmpfD44sza1)

* [Array positions](https://ellie-app.com/jLB5BKxDTRa1)

* [Array length](https://ellie-app.com/jLHMPywgzta1)
