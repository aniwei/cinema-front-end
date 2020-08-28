import { useState } from 'react';
import Select from '@atlaskit/select';
import Modal, {
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';
import Form, { ErrorMessage, Field, FormFooter } from '@atlaskit/form';
import Textfield from '@atlaskit/textfield';
import Tabs from '@atlaskit/tabs';
import DynamicTable from '@atlaskit/dynamic-table';
import Button, { ButtonGroup } from '@atlaskit/button';

import { Checkbox } from '@atlaskit/checkbox';

import styles from './index.less';

const MovieCount = () => {
  return (
    <Field name="count" label="电影票数" defaultValue="">
      {({ fieldProps }) => <Textfield {...fieldProps} />}
    </Field>
  );
}

const MovieType = () => {
  return (
    <Field
      name="type"
      label="电影票类型"
      defaultValue={[]}
    >
      {({ fieldProps: { id, ...rest }, error }) => (
        <>
          <Select
            {...rest}
            defaultSelected="ORIGINAL"
            options={[
              { label: '普通票', value: 'ORIGINAL' },
              { label: '学生票', value: 'STUDENT' },
              { label: '长者票', value: 'SENIOR' },
            ]}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
      )}
    </Field>  
  )
}

const MovieSelection = ({ movie, selected, onSelect }) => { 
  const shows = new Map();

  movie.shows.forEach(show => {
    let item = shows.get(show.date);

    if (!item) {
      shows.set(show.date, item = []);
    }

    item.push(show);
  });

  const tabs = [];

  shows.forEach((show, key) => {
    const onMovieSelect = (show) => {
      onSelect(show);
    }

    const onRowsRendering = () => {
      return show.sort((a, b) => {
        return a.timestamp > b.timestamp ? -1 : 1
      }).map(show => {
        return {
          key: movie.objectId,
          onClick: (event) => onMovieSelect(show),
          cells: [
            {
              key: 'time',
              content: show.time
            }, {
              key: 'checkbox',
              content: <div>
                {
                  show.objectId === (selected ? selected.objectId : null) && <Checkbox isChecked />
                }
              </div>
            }
          ],
        }
      })
    }

    tabs.push({
      show,
      label: key,
      content: <DynamicTable 
        rows={onRowsRendering()}
        isLoading={false}
        isFixedSize
      />
    })
  });

  tabs.sort((a, b) => {
    return a.show.timestamp > b.timestamp ? -1 : 1
  });

  const [selectedKey, setSelected] = useState(tabs[0]);

  const onTabSelect = (selected, selectedIndex) => {
    setSelected(selectedIndex);
  }

  return (
    <Tabs tabs={tabs} onSelect={onTabSelect} selected={selectedKey} />
  )
}


export default function SellModal ({ movie, onSubmit, onClose }) {
  const [selected, setSelected] = useState(null);

  const onFormSubmit = async (data) => {
    if (!selected) {
      return alert(`请选择购买电影场次`);
    }

    if (!data.type.value) {
      return alert(`请选择电影票类型`);
    }

    if (!data.count) {
      return alert(`电影票数目必须大于 0 且 小于 60`);
    }

    setSelected(null);

    return onSubmit({
      fields: {
        type: data.type.value,
        count: Number(data.count),
      },
      showId: selected.objectId
    });
  }

  const onSelect = (selected) => {
    setSelected(selected);
  }

  const onFormRendering = ({ formProps, submitting }) => {
    return <form {...formProps} className={styles.form} style={{ width: '300px', minHeight: '200px' }}>
      <MovieType />
      <MovieCount />
      <FormFooter>
        <ButtonGroup>
          <Button appearance="subtle" onClick={onClose}>取消</Button>
          <Button type="submit" appearance="primary" isLoading={submitting}>
            购买
          </Button>
        </ButtonGroup>
      </FormFooter>
    </form>
  }

  return (
    <ModalTransition>
      {movie && (
        <Modal
          components={{
            Header: (props) => {
              return (
                <ModalHeader {...props}>
                  <ModalTitle>{movie.title.zh_MO}</ModalTitle>
                </ModalHeader>
              )
            }
          }}
        >
          <MovieSelection 
            movie={movie} 
            selected={selected} 
            onSelect={onSelect} 
            
          />
          <Form onSubmit={onFormSubmit}>
            {onFormRendering}
          </Form>
        </Modal>
      )}
    </ModalTransition>
  );
}