import InfiniteCalendar from 'react-infinite-calendar';
import { getLocale } from 'umi-plugin-react/locale';


import 'react-infinite-calendar/styles.css';
import styles from './index.less';

const theme = {
  accentColor: '#448AFF',
  floatingNav: {
    background: 'rgba(56, 87, 138, 0.94)',
    chevron: '#FFA726',
    color: '#FFF',
  },
  headerColor: '#f8b5b3',
  selectionColor: '#ef9e9c',
  textColor: {
    active: '#FFF',
    default: '#333',
  },
  todayColor: '#FFA726',
  weekdayColor: '#ef9e9c',
}

function ToolBar () {
  return (
    <div></div>
  );
}

export default function Programme () {
  const now = new Date();
  const locale = getLocale();

  const onSelect = () => {

  }

  return (
    <div>
      <div>
        <div>
          <InfiniteCalendar 
            locale={}
            min={now}
            minDate={now}
            theme={theme}
            onSelect={onSelect}
          />
        </div>
        <div></div>
      </div>

      <div>
        
      </div>
    </div>
  );
}