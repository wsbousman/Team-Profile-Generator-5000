
const manager = [
  'managerName',
  'managerId',
  'managerEmail',
  'managerOffice'
]

test('checks manager data', () => {
  expect(manager).toContain('managerName', 'managerId', 'managerEmail', 'managerOffice');
});

const engineer = [
  'engineerName',
  'engineerId',
  'engineerEmail',
  'engineerGithub'
]

test('checks manager data', () => {
  expect(engineer).toContain('engineerName', 'engineerId', 'engineerEmail', 'engineerGithub');
});

const intern = [
  'internName',
  'internId',
  'internEmail',
  'internSchool'
]

test('checks manager data', () => {
  expect(intern).toContain('internName', 'internId', 'internEmail', 'internSchool');
});