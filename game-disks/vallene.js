const vallene = {
  roomId: 'start', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'start', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Chapter 0: A Sad Day to be Alive', // Displayed each time the player enters the room.
      desc: `It is the year 3360 on the planet of Vallene. This small planet in ancient times used to be a barren wasteland with people fighting in endless sand dunes, until 'Dawn' appeared. Dawn, a flying castle which appeared 5,000 years ago, 
              shifted the weather, and created seasons. Since then, Dawn has been controlled by a Royal family since the beginning, led by the chosen sovereign, who is given the title of “Maestro”, and the “Four Heroes of the Seasons”.
               Our story begins when the most recent sovereign has died. An Empress loved by her people, as well as her eldest son Isaiah. GO NORTH to begin your journey.
`, // Displayed when the player first enters the room.
      items: [
        {
          name: 'door',
          desc: 'It leads NORTH.', // Displayed when the player looks at the item.
          onUse: () => println(`Type GO NORTH to try the door.`), // Called when the player uses the item.
        },
        {
          name: ['vines', 'vine'], // The player can refer to this item by either name. The game will use the first name.
          desc: `They grew over the DOOR, blocking it from being opened.`,
        },
        {
          name: 'axe',
          desc: `You could probably USE it to cut the VINES, unblocking the door.`,
          isTakeable: true, // Allows the player to take the item.
          onUse: () => {
            // Remove the block on the room's only exit.
            const room = getRoom('start');
            const exit = getExit('north', room.exits);

            if (exit.block) {
              delete exit.block;
              println(`You cut through the vines, unblocking the door to the NORTH.`);
            } else {
              println(`There is nothing to use the axe on.`);
            }
          },
        }
      ],
      exits: [
        {
          dir: 'north', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'clearing',
          block: `The DOOR leading NORTH is overgrown with VINES.`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
        },
      ],
    },
    {
      id: 'clearing',
      name: 'A Forest Clearing',
      desc: `It's a forest clearing. To the SOUTH is The First Room.`,
      exits: [
        {
          dir: 'south',
          id: 'start',
        },
      ],
    }
  ],
};
