export function randomItems<T = unknown>(list: T[], numItemsToPick: number): T[] {
    if (numItemsToPick >= list.length) {
      return [...list]; 
    }
  
    const shuffledList = [...list]; // Create a copy of the original list
    const pickedItems: T[] = [];
  
    for (let i = 0; i < numItemsToPick; i++) {
      if (shuffledList.length === 0) {
        break; 
      }
      const randomIndex = Math.floor(Math.random() * shuffledList.length);
      pickedItems.push(shuffledList.splice(randomIndex, 1)[0]);
    }
  
    return pickedItems;
  }
  
  