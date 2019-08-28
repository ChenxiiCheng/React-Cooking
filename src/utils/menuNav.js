const menuNav = [
  {
    title: '首页 / Home',
    key: '/home'
  },
  {
    title: '早餐 / Breakfast',
    key: '/breakfast',
    children: [
      {
        title: '粥 / Porridge',
        key: '/breakfast/porridge'
      },
      {
        title: '豆浆 / Soybean Milk',
        key: '/breakfast/soybean'
      },
      {
        title: '面包 / Bread',
        key: '/breakfast/bread'
      },
      {
        title: '油条 / Deep-Fried Sticks',
        key: '/breakfast/sticks'
      }
    ]
  },
  {
    title: '烘焙 / Bake',
    key: '/bake',
    children: [
      {
        title: '甜点 / Dessert',
        key: '/bake/dessert'
      },
      {
        title: '蛋糕 / cake',
        key: '/bake/cake'
      }
    ]
  },
  {
    title: '常见菜 / Common',
    key: '/common',
    children: [
      {
        title: '快手菜 / Fast dish',
        key: '/common/fast'
      },
      {
        title: '下饭菜 / Good with rice',
        key: '/common/overrice'
      }
    ]
  },
  {
    title: '主食 / Staple',
    key: '/staple',
    children: [
      {
        title: '馒头 / Mantou',
        key: '/staple/mantou'
      },
      {
        title: '包子 / Baozi',
        key: '/staple/baozi'
      },
      {
        title: '拉面 / Noodles',
        key: '/staple/noodles'
      },
      {
        title: '米饭 / Rice',
        key: '/staple/rice'
      }
    ]
  },
  {
    title: '肉类 / Meat',
    key: '/meat',
    children: [
      {
        title: '猪肉 / Pork',
        key: '/meat/pork'
      },
      {
        title: '鸡肉 / Chicken',
        key: '/meat/chicken'
      },
      {
        title: '鸭肉 / Duck',
        key: '/meat/duck'
      },
      {
        title: '牛肉 / Beef',
        key: '/meat/beef'
      },
      {
        title: '羊肉 / Mutton',
        key: '/meat/mutton'
      },
      {
        title: '鱼肉 / Fish',
        key: '/meat/fish'
      }
    ]
  },
  {
    title: '蔬菜 / Vegetable',
    key: '/vegetable',
    children: [
      {
        title: '根茎蔬菜 / Root vegetables',
        key: '/vegetable/root'
      },
      {
        title: '菌菇类 / Mushroom',
        key: '/vegetable/mushroom'
      },
      {
        title: '叶类蔬菜 / Leave vegetables',
        key: '/vegetable/leave'
      }
    ]
  },
  {
    title: '水果 / Fruit',
    key: '/fruit'
  },
  {
    title: '汤羹 / Soup',
    key: '/soup'
  },
  {
    title: '饮料 / Drinks',
    key: '/drinks',
    children: [
      {
        title: '咖啡 / Coffee',
        key: '/drinks/coffee'
      },
      {
        title: '牛奶 / Milk',
        key: '/drinks/milk'
      }
    ]
  },
  {
    title: '寿司 / Sushi',
    key: '/sushi'
  }
];
export default menuNav;
