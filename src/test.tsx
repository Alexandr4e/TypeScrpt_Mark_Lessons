// const overrides = {
//   prop1: "value1",
//   prop2: "value2",
//   prop3: 4,
//   prop4: "value2",
//   prop5: 32,
//   prop6: "value2"
// };

// interface someProps {
//   prop1: string;
//   prop2: string;
//   prop3: string;
//   prop4: string;
//   prop5: string;
// }

// interface DefaultValue {
//   prop1: string;
//   prop2: string;
// }

// type FunctionType = (
//   arg: Partial<someProps>
// ) => DefaultValue & Partial<someProps>;

// function getProps(overrides: Partial<someProps>): FunctionType {
//   return {
//     prop1: "value1",
//     prop2: "value2",
//     ...overrides
//   };
// }

// // // Вызов
// // getProps({
// //   prop2: "nonDefaultValue"
// // });

// console.log(getProps({ prop2: "nonDefaultValue" }));

// https://classroom.google.com/u/1/c/MzE5NTM4ODE0NjY2/a/MzE5OTIzNjM5NDQw/details

interface PropsType {
  prop1: string;
  prop2: string;
}

function getProps(overrides: Partial<PropsType>): PropsType {
  return {
    prop1: "value1",
    prop2: "value2",
    ...overrides
  };
}

// Вызов
getProps({
  prop2: "nonDefaultValue"
});
