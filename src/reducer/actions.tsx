export const increment = () => ({
  type: "ADD" as const
});

export const decrement = () => ({
  type: "DELETE" as const
});

export type ActionAdd = ReturnType<typeof increment>;
export type ActionDelete = ReturnType<typeof decrement>;
export type ActionType = ActionAdd | ActionDelete;
