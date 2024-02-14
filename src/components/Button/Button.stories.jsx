import Button from './Button';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    color: {
        options: ['primary', 'default', 'danger'],
        control: {type: 'select'}
    },
    size: {
        options: ['sm', 'base', 'lg'],
        control: {type: 'select'}
    },
    backgroundColor: { 
        control: {type: 'color' }
    },
  }
};

//// 引数なしバージョン
// export const Default = () => <Button>Default</Button>;
// export const Primary = () => <Button color="primary">Primary</Button>
// export const Danger = () => <Button color="danger">Danger</Button>
// export const PrimarySmall = () => (
//     <Button size="sm" color="primary">
//         Small
//     </Button>
// );
// export const PrimaryLarge = () => (
//     <Button size="lg" color="primary">
//         Large
//     </Button>
// );

//// 引数ありバージョン
const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Default'
}

export const Danger = Template.bind({})
Danger.args = {
    children: 'Danger',
    color: 'danger'
}

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Small',
  color: 'primary',
  size: 'sm',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  ...PrimarySmall.args,
  children: 'Large',
//   color: 'primary',
  size: 'lg',
};