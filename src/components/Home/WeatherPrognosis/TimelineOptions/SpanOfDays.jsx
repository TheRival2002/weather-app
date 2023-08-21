import { MyList } from "../../../../styles/components/MyList";
import { TextListItemBtn } from "../../../ui/TextListItemBtn";

export const SpanOfDays = () => {
  const btnText = ["Today", "Tomorrow", "Next 7 days"];

  const listItems = btnText.map((text, index) => (
    <TextListItemBtn key={index} text={text} ind={index} />
  ));

  return (
    <>
      <MyList disablePadding sx={{ gap: "2rem" }}>
        {listItems}
      </MyList>
    </>
  );
};
