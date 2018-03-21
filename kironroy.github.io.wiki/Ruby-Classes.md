### Ruby code into English:
***
Source: ```https://learnrubythehardway.org/book/ex44.html```
***

```bed = Balance.new()``` 

Set bed to an instance of class Balance.

```
class Color < Curve
end
```
Make a class named Color that is-a Curve.

```
class Body
    def bean(change)
  end
end
```
Class Body has-a function named bean that takes change parameter.


```celery.beam(coil, creator)``` 
From celery get the beam function, and call it with parameters coil, creator.

```cause.dirt = 'boot'``` 
From cause get the dirt attribute and set it to 'boot'.

***

### Inheritance (Is-a relationships):

```
class Parent

  def implicit()
    puts "PARENT implicit()"
  end
end

class Child < Parent    # Make a class named Child that is-a Parent
end                     # Child inherits from Parent class

dad = Parent.new()
son = Child.new()

dad.implicit()          # PARENT implicit() 
son.implicit()          # PARENT implicit() 
```
**Output:**
```
PARENT implicit()
PARENT implicit()
```
#### Override:

```
class Parent

  def override()
    puts "PARENT override()"
  end
end

class Child < Parent
  def override()             # will override the Parent's override function
    puts "CHILD override()"
  end
end

dad = Parent.new()
son = Child.new()

dad.override()               # PARENT override() 
son.override()               # CHILD override() 
```

**Output:**

```
PARENT override()            
CHILD override()
```     

#### Super Method:

```
class Parent
  def altered()
    puts "PARENT altered()"
  end
end

class Child < Parent
  def altered()
    puts "CHILD, BEFORE PARENT altered()"
    super()                                # PARENT altered() 
    puts "CHILD, AFTER PARENT altered()"
  end

end

dad = Parent.new()
son = Child.new()

dad.altered()                              # PARENT altered()

son.altered()                              # CHILD, BEFORE PARENT altered()
                                           # PARENT altered()
                                           # CHILD, AFTER PARENT altered()
```
**Output:**
```
PARENT altered()
CHILD, BEFORE PARENT altered()
PARENT altered()
CHILD, AFTER PARENT altered()
```
***

### Composition (Has-a Relationships):

```
class Other

  def override()
    puts "OTHER override()"
  end

  def implicit()
    puts "OTHER implicit()"
  end

  def altered()
    puts "OTHER altered()"
  end
end

class Child

  def initialize()            # new object creation, will get from Class Other
    @other = Other.new()       # accessing objects inside Class Other
  end

  def implicit()
    @other.implicit()         # accessing Class' implicit function
                               # Inside the functions in a class, 
                                # @ is a variable for the instance/object 
                                 # being accessed.
  end

  def override()              # override function belongs to Child Class
    puts "CHILD override()"
  end

  def altered()
    puts "CHILD, BEFORE OTHER altered()"
    @other.altered()          # accessing Class' altered function
    puts "CHILD, AFTER OTHER altered()"  
  end
end

son = Child.new()             # set son to an instance of Class Child 
                               # which has-a relationship with class Other

son.implicit()                # OTHER implicit()
son.override()                # CHILD override()

son.altered()                 # CHILD, BEFORE OTHER altered()
                              # OTHER altered()
                              # CHILD, AFTER OTHER altered()

```

**Output:**
```
OTHER implicit()
CHILD override()
CHILD, BEFORE OTHER altered()
OTHER altered()
CHILD, AFTER OTHER altered()
```
***
