# Warmup - Raindrops
# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:

# If the number contains 3 as a factor, output 'Pling'.
# If the number contains 5 as a factor, output 'Plang'.
# If the number contains 7 as a factor, output 'Plong'.
# If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

# Examples
# 28 has 7 as a factor.
# In raindrop-speak, this would be a simple "Plong".
# 1755 has 3 and 5 as factors.
# In raindrop-speak, this would be a "PlingPlang".
# 34 has neither 3, 5 nor 7 as a factor.
# Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

# New file setup today. You will need to create a raindrops.rb file that can be executable in your terminal.

# require 'pry'

# puts "Enter a numer: "
# number = gets.to_i

# def isAFactor(number, factor)
#   number % factor == 0
# end

# def raindrops(number)
#   string = ""

#   if isAFactor(number, 3)
#     string += "Pling"
#   end

#   if isAFactor(number, 5)
#     string += "Plang"
#   end

#   if isAFactor(number, 7)
#     string += "Plong"
#   end

#   if string.length == 0
#     string += number.to_s
#   end

#   p string

# end

# raindrops(number)
# binding.pry


# Version 2

def raindrops num
  output = ""
  output << "Pling" if num % 3 == 0
  output << "Plang" if num % 5 == 0
  output << "Plong" if num % 7 == 0
  output.empty? ? num.to_s : output
end

puts raindrops 28
puts raindrops 1755
puts raindrops 34
puts raindrops 105