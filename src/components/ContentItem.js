import React, { useState } from "react";
import "./contentItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { sellItem, buyItem, addShoppingList, updateAddShoppingList, updateRemoveShoppingList, removeShoppinList } from "../redux/SpendSlice/SpendSlice";
import NumberFormat from "react-number-format";
const ContentItem = ({ item }) => {
  const dispatch = useDispatch();
  const totalMoney = useSelector((state) => state.spend.money);
  const [itemCount, setItemCount] = useState(0);
  const SellItem = ({price, id, item}) => {
    setItemCount(itemCount - 1);
    console.log(itemCount);
    if(itemCount === 1)
    {
      dispatch(sellItem(price));
      dispatch(removeShoppinList(id))

    }
    else{
      dispatch(sellItem(price));
      dispatch(updateRemoveShoppingList({...item,itemCount}))

    }
  };

  const BuyItem = ({price, item}) => {
    setItemCount(itemCount + 1);
    if(itemCount===0)
    {
      dispatch(buyItem(price));
      dispatch(addShoppingList({...item,itemCount}))
    }
    else{
      dispatch(buyItem(price));
      dispatch(updateAddShoppingList({...item,itemCount}));
    }

  };

  const IsBuyable = (price) => {
    if (totalMoney < price) {
      return true;
    } else {
      return false;
    }
  };
  return (
      <div className="grid-item">
        <img
          src={item.img}
          style={{ width: 250, height: 150, borderRadius: 10 }}
          alt=""
        />
        <h3>{item.name}</h3>
        <NumberFormat
          value={item.price}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"$"}
        />

        <div>{itemCount}</div>
        <div className="itembottom">
          <button
            disabled={itemCount === 0}
            onClick={() => SellItem({price:item.price, id:item.id, item})}
          >
            Sell
          </button>
          <NumberFormat
            style={{ fontSize: 22 }}
            value={item.price * itemCount}
            displayType={"text"}
            thousandSeparator={true}
            suffix={"$"}
          />
          <button
            disabled={IsBuyable(item.price)}
            onClick={() => BuyItem({price:item.price,item})}
          >
            Buy
          </button>
        </div>
      </div>
  );
};

export default ContentItem;
