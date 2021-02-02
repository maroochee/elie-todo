/* eslint-disable no-undef */

import React from "react";
import { render, screen, within } from '@testing-library/react';
import App from '../src/App.js';

const po = {
  buttons: {method: 'getByText', items: ['Add', 'All', 'Active', 'Completed']},
  labels: {method: 'getByLabelText', items: ['3 tasks remaining', 'Eat', 'Sleep', 'Repeat']},
};


describe('App', () => {
  test('should render App component', () => {
    render(<App tasks={INITIAL_DATA}/>);
  });

  test('should display buttons', () => {
    const queryBase = po.buttons;
    render(<App tasks={INITIAL_DATA}/>);    
    queryBase.items.forEach(item => { expect(screen[queryBase.method](item)).toBeInTheDocument()});
  });

  test('should display All filter button selected', () => {
    render(<App tasks={INITIAL_DATA}/>);    
    expect(within(screen.getByTestId('selected-filter')).getByText('All')).toBeInTheDocument();
  });

  test('should display initial tasks', () => {
    const queryBase = po.labels;
    render(<App tasks={INITIAL_DATA}/>);    
    queryBase.items.forEach(item => { expect(screen[queryBase.method](item)).toBeInTheDocument()});
  });

  test('should display all active tasks', () => {
    render(<App tasks={INITIAL_DATA}/>);    
    const activeTasks = screen.getAllByTestId('active-task');
    const completedTasks = screen.getAllByTestId('completed-task');

    expect(activeTasks.length).toBe(2);
    expect(completedTasks.length).toBe(1);

    expect(within(completedTasks[0]).getByLabelText('Eat')).toBeInTheDocument();
    expect(within(activeTasks[0]).getByLabelText('Sleep')).toBeInTheDocument();
    expect(within(activeTasks[1]).getByLabelText('Repeat')).toBeInTheDocument();
  });

  test('should NOT display edit form', () => {
    render(<App tasks={INITIAL_DATA}/>);    
    expect(screen.queryByLabelText('/New name for/i')).not.toBeInTheDocument();
    expect(screen.queryByText('/cancel/i')).not.toBeInTheDocument();
    expect(screen.queryByText('/save/i')).not.toBeInTheDocument();
  });

});

