import { useDispatch, useSelector } from "react-redux";
import {
  MyListItem,
  StyledListItemButton,
  StyledListItemText,
} from "../../styles/components/MyList";
import { daysQuantityActions } from "../../redux/days-quantity-data-slice";
import { motion } from "framer-motion";

export const TextListItemBtn = ({ text, ind }) => {
  const dispatch = useDispatch();

  const quantityIndex = useSelector(
    (state) => state.quantityIndex.quantityIndex
  );

  const handleClick = () => {
    dispatch(daysQuantityActions.changeIndex(ind));
  };

  return (
    <MyListItem disablePadding>
      <StyledListItemButton
        component={motion.div}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        selected={quantityIndex === ind}
        sx={{ padding: "0" }}
        onClick={handleClick}
      >
        <StyledListItemText primary={text} />
      </StyledListItemButton>
    </MyListItem>
  );
};
