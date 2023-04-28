import { shallow } from 'enzyme';
import { ListOfNames } from './ListOfNames';

test('renders without errors', () => {
  const wrapper = shallow(<ListOfNames />);
  expect(wrapper.length).toBe(1);
});