const mysort = (col1:number[], col2:number[]) => {
    let before:string = col1+","+col2
    let before_new:string[]=before.split(",")
    let use:number[]=[]
    for (let i=0;i<before_new.length;i++){
        use.push(parseInt(before_new[i]))
    }
    for (let i = 0; i < use.length; i++) {
      for (let j = 0; j < use.length; j++) {
        let b:number = use[j];
        if (use[j] > use[j + 1]) {
          use[j] = use[j + 1];
          use[j + 1] = b;
        }
      }
    }
    console.log(use)
  };
  let arr1:number[] = [12, 23,78, 576,89]; //duplicate elements
  let arr2:number[] = [1,2,5,6,90]; //Same element
  mysort(arr1, arr2);
