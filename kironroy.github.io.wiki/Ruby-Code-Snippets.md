**Code Snippets:**
 *  object_id method
```
#  Reassignment and the use of object_id

def prompt(msg = ' ')
  puts "#{msg}"
end

hello = "hello"
greeting = hello


prompt hello

prompt

prompt greeting

prompt

prompt "The object id for hello: #{hello.object_id} is equal to the object id for greeting #{greeting.object_id}. "
prompt
prompt "Is this true or false?  It is: #{hello.object_id == greeting.object_id}."

prompt
prompt "-----Reassignment below------"
prompt

greeting = "ciao"

prompt "The object id for hello: #{hello.object_id} is NOT equal to the object id for greeting #{greeting.object_id}. "
prompt
prompt "Is this true or false?  It is: #{hello.object_id == greeting.object_id}."

```
*  inner/outer_scope, bad naming
```
# inner/outer scope bad naming

def a()   # NEVER WRITE A FUNCTION LIKE THIS 
  puts 7
end

a()       # Calling function a
a         # Also calling function a

puts "a's object id is: #{a.object_id}"

a = 5     # NEVER DECLARE A VARIABLE LIKE THIS    


puts '-' * 20
          
          # Now a will become 5 because of line 8
puts a
puts a
puts "a's object id is: #{a.object_id}"
```

*  mutating the caller
```
# permanent changes to an array

# There are many methods and ! operator
# That can change data permanently

def prompt(msg = ' ')
  puts "#{msg}"
end

letters_array = %w(a b c d e f g)
prompt letters_array

prompt '-' * 35

letters_array.pop # permanent change to letters_array
prompt letters_array

```
*  numbers with under_score

```
# easier on the eyes

start_point = 10_000_000

p start_point                 # 100000000
p start_point.is_a? Integer   # True

```
