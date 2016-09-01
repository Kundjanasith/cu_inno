echo "Start"
echo "input" $1
rm -rf test.py
echo $1 >>  test.py 
python test.py
echo "End"
