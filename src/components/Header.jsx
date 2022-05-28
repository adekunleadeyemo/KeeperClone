import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  return (
    <header className="h-[800px]">
    <HighlightIcon backgroundColor="white"/>
      <h1 className="pt-10">Keeper</h1>
    </header>
  );
}

export default Header;
