class Luhn

  def initialize number
    @number = number
  end

  def luhnify

    numbers = []

    # @number.digits #[3,5,5,4]
    @number.digits.each_with_index do |digit, index|
      if index.odd?
        digit *= 2
      end

      if digit > 9
        digit = digit - 9
      end

      numbers << digit
    end

    numbers.reverse
  end


  def valid?
    num = luhnify

    total = 0
    num.each do |n|
      total += n
    end

    if total % 10 == 0
      puts "#{@number} is valid luhn number"
    else
      luhnifield_num = @number + (10 - total % 10)
      puts "new total: #{total + (10 - total % 10)}"
      puts "#{luhnifield_num} would be a valid luhn number"
    end

    # if the result does not end in zero, add the difference between 10 and the remainder of check % 10.

  end
end


l = Luhn.new(3554)
puts l.valid?
# => false

l = Luhn.new(8763)
puts l.valid?
# => true