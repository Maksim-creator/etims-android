import React from 'react';
import {TouchableOpacity} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';
import InterText from '../../../../components/InterText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Button,
  Divider,
  HStack,
  IconButton,
  Popover,
  Radio,
  VStack,
} from 'native-base';
import styles from './styles';

interface Props {
  displaying: number;
  setDisplaying: (value: number) => void;
  filter: string;
  setFilter: (value: string) => void;
  cleanFilters: () => void;
}

const filters = [
  {value: 'name', iconName: 'format-color-text', label: 'Name'},
  {value: 'date', iconName: 'calendar-range', label: 'Date'},
  {value: 'completed', iconName: 'check', label: 'Completed (%)'},
];

const Filters: React.FC<Props> = ({
  displaying,
  setDisplaying,
  filter,
  setFilter,
  cleanFilters,
}) => {
  const renderTrigger = (triggerProps: any) => (
    <TouchableOpacity {...triggerProps} style={styles.trigger}>
      <Icon name={'tune-variant'} size={20} color={'white'} />
    </TouchableOpacity>
  );

  return (
    <Popover trigger={renderTrigger}>
      <Popover.Content w="56" borderRadius={15}>
        <Popover.Arrow />
        <Popover.Body>
          <HStack justifyContent={'space-between'}>
            <Button
              onPress={cleanFilters}
              borderRadius={10}
              backgroundColor={'danger.600'}
              colorScheme={'danger'}
              leftIcon={<Icon name={'close'} color={'white'} size={20} />}>
              Clear
            </Button>

            <Button.Group style={styles.displayContainer}>
              <IconButton
                onPress={() => setDisplaying(0)}
                p={1}
                style={styles.displayListButton(displaying)}
                icon={
                  <Icon
                    name={'format-list-bulleted'}
                    size={20}
                    color={mainBlue}
                  />
                }
              />
              <IconButton
                onPress={() => setDisplaying(1)}
                p={1}
                style={styles.displayTilesButton(displaying)}
                icon={<Icon name={'dock-window'} size={20} color={mainBlue} />}
              />
            </Button.Group>
          </HStack>
          <Divider mt={2} />
          <VStack mt={3}>
            <InterText style={styles.title}>Filter by</InterText>
            <Radio.Group
              value={filter}
              onChange={setFilter}
              name={'filtersGroup'}>
              {filters.map(filterItem => (
                <HStack
                  key={filterItem.value}
                  mt={1}
                  w={'100%'}
                  alignItems={'center'}
                  justifyContent={'space-between'}>
                  <Radio size={'sm'} value={filterItem.value}>
                    {filterItem.label}
                  </Radio>
                  <Icon name={filterItem.iconName} size={20} color={'black'} />
                </HStack>
              ))}
            </Radio.Group>
          </VStack>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
};

export default Filters;
