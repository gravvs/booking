import React from "react"
import styled from "styled-components"

const Calendarz = styled.div`
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  margin: 0;
  width: 300px;
  background: #fff;
  padding: 16px;
  position: absolute;
  z-index: 115;
  left: 0;
  top: 50px;
  border: 0;
  border-radius: 4px;
`

const Calendar = () => {
  return (
    <div>
      <Calendarz>
        <div className="month-indicator">
          <time datetime="2021-08"> August 2021 </time>
        </div>
        <div className="day-of-week">
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </div>
        <div className="date-grid">
          <button>
            <time datetime="2021-08-01">1</time>
          </button>
          <button>
            <time datetime="2021-08-02">2</time>
          </button>
          <button>
            <time datetime="2021-08-03">3</time>
          </button>
          <button>
            <time datetime="2021-08-04">4</time>
          </button>
          <button>
            <time datetime="2021-08-05">5</time>
          </button>
          <button>
            <time datetime="2021-08-06">6</time>
          </button>
          <button>
            <time datetime="2021-08-07">7</time>
          </button>
          <button>
            <time datetime="2021-08-08">8</time>
          </button>
          <button>
            <time datetime="2021-08-09">9</time>
          </button>
          <button>
            <time datetime="2021-08-10">10</time>
          </button>
          <button>
            <time datetime="2021-08-11">11</time>
          </button>
          <button>
            <time datetime="2021-08-12">12</time>
          </button>
          <button>
            <time datetime="2021-08-13">13</time>
          </button>
          <button>
            <time datetime="2021-08-14">14</time>
          </button>
          <button>
            <time datetime="2021-08-15">15</time>
          </button>
          <button>
            <time datetime="2021-08-16">16</time>
          </button>
          <button>
            <time datetime="2021-08-17">17</time>
          </button>
          <button>
            <time datetime="2021-08-18">18</time>
          </button>
          <button>
            <time datetime="2021-08-19">19</time>
          </button>
          <button>
            <time datetime="2021-08-20">20</time>
          </button>
          <button>
            <time datetime="2021-08-21">21</time>
          </button>
          <button>
            <time datetime="2021-08-22">22</time>
          </button>
          <button>
            <time datetime="2021-08-23">23</time>
          </button>
          <button>
            <time datetime="2021-08-24">24</time>
          </button>
          <button>
            <time datetime="2021-08-25">25</time>
          </button>
          <button>
            <time datetime="2021-08-26">26</time>
          </button>
          <button>
            <time datetime="2021-08-27">27</time>
          </button>
          <button>
            <time datetime="2021-08-28">28</time>
          </button>
          <button>
            <time datetime="2021-08-29">29</time>
          </button>
          <button>
            <time datetime="2021-08-30">30</time>
          </button>
          <button>
            <time datetime="2021-08-31">31</time>
          </button>
        </div>
      </Calendarz>
    </div>
  )
}
export default Calendar
