function skillsMember() {
  return {
    name: 'Skills Member',
    template: `
      <div>
        <h2>Skills Member</h2>
        <h3>{{ $ctrl.name }}</h3>
      </div>
    `,
    bindings: {
      name: '@'
    }
  };
}