import React, { useState, useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { useNavigate, useLocation } from "react-router-dom";

import "../../styles/divider.scss";

const DividerArrow = () => {
  const [nextPage, setNextPage] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const pageList = [
    "/home",
    "/bmi",
    "/deficits",
    "/energy-needs",
    "/dashboard",
    "/about",
    "/calories-counter",
  ];

  const updateLocation = (e) => {
    e.preventDefault;
    const currentPage = location.pathname.toString();
    const foundPageIndex = (e) => e === currentPage;
    const currentIndex = pageList.findIndex(foundPageIndex);
    setNextPage(currentIndex + 1);
  };

  useEffect(() => {
    if (nextPage !== undefined && nextPage < 7) {
      navigate(pageList[nextPage]);
    } else if (nextPage === 7) {
      setNextPage(0);
    }
  }, [nextPage]);

  return (
    <TiArrowSortedDown className="divider-arrow" onClick={updateLocation} />
  );
};

export default DividerArrow;
