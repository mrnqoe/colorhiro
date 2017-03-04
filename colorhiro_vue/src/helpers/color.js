export function changeColor(color){
  document.querySelector("body").style.backgroundColor = color;
  console.log(color);
}

export function changeName(name){
  console.log(name);
}

export function colorToHex(color, callback){
  return callback(color);
}
  // var colors = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
  // "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
  // "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
  // "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
  // "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
  // "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
  // "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
  // "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
  // "honeydew":"#f0fff0","hotpink":"#ff69b4",
  // "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
  // "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
  // "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
  // "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
  // "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
  // "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
  // "navajowhite":"#ffdead","navy":"#000080",
  // "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
  // "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
  // "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
  // "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
  // "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
  // "violet":"#ee82ee",
  // "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
  // "yellow":"#ffff00","yellowgreen":"#9acd32"};

export function hexToColor(hexcode){


  var colors = {
"B71C1C": "Chilli Pepper",
"D32F2F": "Lava Red",
"F44336": "Grapefruit",
"E57373": "Valentine Red",
"FFCDD2": "Flamingo Pink",
"880E4F": "Plum Velvet",
"C2185B": "Burn Pink",
"E91E63": "Pink Lemonade",
"F06292": "Pink Cupcake",
"F8BBD0": "Cadillac Pink",
"4A148C": "Indigo",
"7B1FA2": "Dark Orchid",
"9C27B0": "Dark magenta",
"BA68C8": "Purple Flower",
"E1BEE7": "Mauve",
"311B92": "Dark blue",
"512DA8": "Pueple Haze",
"673AB7": "Violet",
"9575CD": "Medium Purple",
"D1C4E9": "Periwinkle",
"1A237E": "Dark blue",
"303F9F": "Blue Whale",
"3F51B5": "Free Speech Blue",
"7986CB": "Wild Blue Yonder",
"C5CAE9": "Slate BLue",
"0D47A1": "Lapis Blue",
"1976D2": "Shapphire Blue",
"2196F3": "Dodger BLue",
"64B5F6": "Maya Blue",
"BBDEFB": "Pale Cornflower Blue",
"827717": "Pesto",
"AFB42B": "Acovado Green",
"CDDC39": "Pistachio Green",
"DCE775": "Mindaro",
"F0F4C3": "Saltpan",
"33691E": "Green House",
"689F38": "Seaweed Green",
"8BC34A": "Atlantis",
"AED581": "Feijoa",
"DCEDC8": "Frog Green",
"1B5E20": "San Felix",
"388E3C": "Japanese Laurel",
"4CAF50": "Fruit Salad",
"81C784": "De York",
"C8E6C9": "Granny Apple",
"B2DFDB": "Scandal",
"4DB6AC": "Puerto Rico",
"009688": "Dark Cyan",
"00796B": "Pine Green",
"004D40": "Cyprus",
"006064": "Mosque",
"0097A7": "Bondi Blue",
"00BCD4": "Iris Blue",
"4DD0E1": "Medium Turquoise",
"B2EBF2": "Pale Turquoise",
"B3E5FC": "Columbia Blue",
"4FC3F7": "Malibu",
"03A9F4": "Deep Sky Blue",
"0288D1": "Pacific BLue",
"01579B": "Cobalt",
"F57F17": "Pumpkin",
"FBC02D": "Saffron",
"FFEB3B": "Gorse",
"FFF176": "Witch Haze",
"FFF9C4": "Lemon Chiffon",
"FF6F00": "Safety Orange",
"FFC107": "Amber",
"FFD54F": "Kournikova",
"FFECB3": "Banana Mania",
"E65100": "Persimmon",
"F57C00": "Tangerine",
"FF9800": "Orange Peel",
"FFB74D": "Koromiko",
"FFE0B2": "Navajo White",
"FFCCBC": "Your Pink",
"FF8A65": "Atomic Tangerine",
"FF5722": "Outrageous Orange",
"E64A19": "Cinnabar",
"BF360C": "Harley Davidson Orange",
"3E2723": "Brown Pod",
"5D4037": "Very Dark Brown",
"795548": "Ironstone",
"A1887F": "Almond Frost",
"D7CCC8": "Swiss Coffee",
"263238": "Oxford Blue",
"455A64": "San Juan",
"607D8B": "Hoki",
"90A4AE": "Botticelli",
"CFD8DC": "Pattens Blue"

};

    // for (var colorName in colors){
      console.log(colors[hexcode.slice(1)], hexcode.slice(1));
    //   if (colors[colorName] == hexcode.toLowerCase()){


    //     return colorName;
    //   }
    // }

  if (typeof colors[hexcode.slice(1)] != 'undefined')
      return colors[hexcode.slice(1)];

  return false;
}
