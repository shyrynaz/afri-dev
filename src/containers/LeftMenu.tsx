import React, { FC, useEffect, useState } from 'react';
import Category from '../model/Category';
import { getCategories } from '../services/DataService';

const LeftMenu: FC = () => {
  const [categories, setcategories] = useState<JSX.Element>(
    <div>Left Menu</div>
  );

  useEffect(() => {
    getCategories().then((categories: Array<Category>) => {
      const cats = categories.map(cat => {
        return <li key={cat.id}>{cat.name}</li>;
      });
      setcategories(<ul>{cats}</ul>);
    });
  });

  return <div className='[grid-area:leftmenu]'>{categories}</div>;
};

export default LeftMenu;
