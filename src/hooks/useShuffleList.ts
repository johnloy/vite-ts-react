import { useCallback, useState } from "react";
import { shuffle } from "../utils";

export function useShuffleList<T extends { id: number }>(list: T[]) {
  const [listItems, setItems] = useState(list);
  const [prevList, setPrevList] = useState(list);

  if (list !== prevList) {
    setPrevList(list);
    // Keep the current (possibly shuffled) order and prepend new items at the top.
    const byId = new Map(list.map((item) => [item.id, item]));
    const kept = listItems
      .filter((item) => byId.has(item.id))
      .map((item) => byId.get(item.id)!);
    const keptIds = new Set(kept.map((item) => item.id));
    setItems([...list.filter((item) => !keptIds.has(item.id)), ...kept]);
  }

  const shuffleList = useCallback(() => setItems((prev) => shuffle(prev)), []);

  return { listItems, shuffleList };
}
