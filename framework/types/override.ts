type Override2<T1, T2> = Omit<T1, keyof T2> & T2;
type Override3<T1, T2, T3> = Override2<Override2<T1, T2>, T3>;
type Override4<T1, T2, T3, T4> = Override2<Override3<T1, T2, T3>, T4>;
type Override5<T1, T2, T3, T4, T5> = Override2<Override4<T1, T2, T3, T4>, T5>;

export type Override<T1, T2, T3 = object, T4 = object, T5 = object> = Override5<
  T1,
  T2,
  T3,
  T4,
  T5
>;
