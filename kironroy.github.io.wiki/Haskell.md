![haskell logo](https://kironroy.github.io/haskell.svg)

### Reference

* [Using GHCi](https://downloads.haskell.org/~ghc/5.04/docs/html/users_guide/ghci.html)
* [Learn You A Haskell](http://learnyouahaskell.com/introduction)
* [Haskell Repo](https://github.com/kironroy/haskell)
***

### GHCi in Terminal (basics)

`$ ghci`

`$ GHCi, version 6.8.2: http://www.haskell.org/ghc/  :? for help  
Loading package base ... linking ... done.  
Prelude>`

`:set prompt "ghci> "`

`ghci> 2 + 15`

`17`

`ghci> 49 * 100`

`4900`

`ghci> 1892 - 1472`

`420`

`ghci> 5 / 2 `

`2.5`
  
***

`ghci> True && False`  

`False`  

`ghci> True && True`  

`True`  

`ghci> False || True`  

`True`   

`ghci> not False`  

`True`  

`ghci> not (True && True)`  

`False`  


***

`ghci> 5 == 5`  

`True`  

`ghci> 1 == 0`  

`False`  

`ghci> 5 /= 5`  

`False`  

`ghci> 5 /= 4`  

`True`  

`ghci> "hello" == "hello"`  

`True`
***
### Functions
`mkdir haskell_try`

`cd haskell_try`

`touch baby.hs`

`pico baby.hs`

```doubleMe x = x + x

doubleUs x y = doubleMe x + doubleMe y

doubleSmallNumber x = if x > 100 then x else x*2

conanO'Brien = "It's a-me, Conan O'Brien!"
 ```

`control o` 

`control x`

`ghci`

```
GHCi, version 8.2.2: http://www.haskell.org/ghc/  :? for help`
Prelude>
:l baby.hs  
*Main> doubleMe 9
18
*Main> doubleUs 4 9
26

```	

***
`:quit ` = exit ghci
