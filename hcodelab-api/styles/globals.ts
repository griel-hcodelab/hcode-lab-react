import { createGlobalStyle } from "styled-components";

export const GlobalsStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
  }
  
  a {
    color: #000;
    text-decoration: none;
  }
  
  a:hover {
    color: #666;
  }
  
  /* Style the header */
  .header {
    background-color: #f1f1f1;
    padding: 30px;
    text-align: center;
    font-size: 35px;
  }
  
  /* Container for flexboxes */
  .row {
    display: -webkit-flex;
    display: flex;
  }
  
  /* Create three unequal columns that sits next to each other */
  .column {
    padding: 10px;
    height: 300px; /* Should be removed. Only for demonstration */
  }
  
  /* Left and right column */
  .column.side {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  
  /* Middle column */
  .column.middle {
    -webkit-flex: 2;
    -ms-flex: 2;
    flex: 2;
  }
  
  /* Style the footer */
  .footer {
    background-color: #f1f1f1;
    padding: 10px;
    text-align: center;
  }
  
  /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
  @media (max-width: 600px) {
    .row {
      -webkit-flex-direction: column;
      flex-direction: column;
    }
  }


`