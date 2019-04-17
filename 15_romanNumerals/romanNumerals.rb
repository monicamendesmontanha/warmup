class Roman

  # def initialize
  #   @roman_map = {
  #    1000 => "M",
  #    900 => "CM",
  #    500 => "D",
  #    400 => "CD",
  #    100 => "C",
  #    90 => "XC",
  #    50 => "L",
  #    40 => "XL",
  #    10 => "X",
  #    9 => "IX",
  #    5 => "V",
  #    4 => "IV",
  #    1 => "I"
  #  }
  # end

  @@roman_map = {
    1000 => "M",
    900 => "CM",
    500 => "D",
    400 => "CD",
    100 => "C",
    90 => "XC",
    50 => "L",
    40 => "XL",
    10 => "X",
    9 => "IX",
    5 => "V",
    4 => "IV",
    1 => "I"
  }

  def to_roman number
    result = ""

    @@roman_map.each do |key, value|
      puts "===== each key: #{key}, value: #{value} ====="
      while number >= key
        result += value

        puts "number: #{number} >= #{key}"

        number -= key

        puts "new number: #{number}"
        puts "new result #{result}"
      end
    end
    result
  end


end

caesar = Roman.new

puts caesar.to_roman 1990