//! Arrays
//! MDN -----> Website for practice
//  array is linear datstructure where we can store multiple values in continuous manner 

// In javascript we can store both homogeneous and hetrogeneous data in array 

let arr = [9,"hello",true,undefined,null,()=>{},
    [3,4,5]]
    console.log (arr)

    // ! how to know the length of the array

    console.log(arr.length)

    // ! how to acces the element from the array

    console.log(arr[1])

    // ! Array Methods

    // ! 1.push()

    // This method is used to add element of the array and it will return the length of the modified array.
    let students = ["rahul", "gill","pant"]
    students.push("bumrah")
    console.log(students)

    // ! 2.pop()

    // pop() method is used to remove the last element from the array and it will return the removed element
    let players = ["dhoni","virat","rohit","yuvaraj"]
    players.pop()
    console.log(players)

    // ! 3. unshift()

    // unshift() method is used to add the starting element from the array and it will return the length of the modified array element

    let ipl = ["kkr","mi","rcb"]

    ipl.unshift("csk")

    // ! 4.shift()

    // shift() method is used to remove the starting element from the array and it will return the length of the modified array element

    let movies = ["jana nayagan","leo","goat"]

    movies.shift()

    console.log(movies)

    // ! 5.includes

    // It is used to check given element is present or not in the array
    // If it present returns true otherwise it will return false 

    console.log(movies.includes("leo"))
    console.log(movies.includes("jana nayagan"))

    // ! 6.indexof()

    // It gives the index number of array

    let webseries = ["loki","dark","braking bad","money heist"]
    console.log(webseries.indexOf("dark"))

    // ! 7.concat()

    // concat() method is used to combine two or more array and it will return one new array.

    let arr2 = [10,20,30] 
    let arr3 = [40,50,60]

    let combineArr = arr2.concat(arr,["hello","hi"])

    console.log(combineArr)

    // ! 8. join()

    // It is used to convert any array into string.
    let charArr = ["h","e","l","l","o"]

    console.log(charArr.join())

    //! 9.reverse()

    // It is used to reverse the array
    // It is modify the original array
    // It is return one array that will be in reverse order

    let arr4 = [1,2,3,4,5,6,7]
    console.log(arr4)
    console.log(arr4.reverse())

    // ! 10.slice()
    // It is used

    // ! 11.splice

    // By using this method we can remove add and modify the arrays elements
    // It is take 3 parameters (startIndex, deleteCount, replacementValue)
    // This method will modify the original array.
    let arr5 = [10,20,30,40,50,]
    arr.splice(1,2)
    console.log(arr5)

    let arr6 = [10000,20000000,400000000,100,200,300,]
    arr6.splice(0,2,50)
    console.log(arr6)

    // ! 1.HigherOrder Array Methods

    // forEach() is HigherOrder array method , it is used for traversing the array.
    // It will take one callback function where it can take 3 Parameters (element, index, array)  

    let number = [10,20,30,40,50]
    number.forEach((Element,index,array)=>{
        console.log(Element,index,array)
    })

    let a1=[] 
    number.forEach((Element)=>{
        a1.push(Element+100)
    })
    console.log(a1)


    // ! 2.map()
    // map() is HigherOrder Array method it is used to Translate the array and we can perform any operation with all the element
    // it take 3 parameters 
    // it will return one new array

       let mappedArr = number.map((Element,index,arr)=>{
        // console.log(ele,index,arr)

        return Element+10
      })
      console.log(mappedArr)


      let names1 = ["mani","dhoni","sachin"]
      let m1 = names1.map((ele)=>{
        return ele.toUpperCase
      })
      console.log(m1)


      // ! 3.filter()

      // filter () is HHigherOrder array method it is used to traverse and check the condition
      // if the condition is matching then it will return that element
      // it can take 3 parameters
      let nums = [5,10,15,20]

      let greater = nums.filter((ele)=>{
           return ele > 10
      })

      console.log(greater)

      // ! 4.reduce()
      // reduce() is HigherOrder array method , it is used to reducing the array into single value
      // It can take 4 parameters (acc,ele,index,arr)
      // acc default value is first element
      let sum2  = nums.reduce((acc,ele)=>{
        return acc+ele
      },0)

      console.log(sum2)

      let multiply = nums.reduce((acc,ele)=>{
        return acc*ele
      },1)

      console.log(multiply)


      // ! sort 
       // This method is used to arrange the array in accending order.
       // It will take two parameters
       // First parameter - second parameter => Ascending Order
       // second parameter - first parameter => Descending Order
      let arr9 =[5,1,4,8,2,4]

      let asc = arr9.sort((x,y)=>{
         return x-y
      })

      let dsc = arr9.sort((x,y)=>{
        return y-x
      })

      console.log(asc)

      let dsc1 = arr9.sort((x,y)=> y-x)

      // ! first the elemnts which are greater than 30 then add 100 with them then add those numbers

      let arr10 = [10,20,30,40,50]

      let f = arr10.filter((ele)=>{
               return ele > 32
      })


      let m = f.map((ele)=> {
        return ele + 100
      })  

       let r = m.reduce((acc,ele)=> {
        return acc + ele 
      })
      console.log(f)
      console.log(m)
      console.log(r)


      


