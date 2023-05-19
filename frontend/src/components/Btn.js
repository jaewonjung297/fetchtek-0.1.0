import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
.button-30 {
  align-items: center;
  appearance: none;
  background-color: #4092FF;
  border-radius: 4px;
  border-width: 0;
  box-shadow: 0 1px 2px, 0 7px 13px -3px, 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
  color: white;
}


.button-30:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-30:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}`

function Btn(props) {
    return (
        <Styles>
          <Link style = {{textDecoration: "none"}} to={props.link}>
            <button className="button-30">
              {props.title}
            </button>
          </Link>
        </Styles>
    )
}

export default Btn;