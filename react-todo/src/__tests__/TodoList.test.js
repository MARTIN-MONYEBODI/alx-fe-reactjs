import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test('initial todos are rendered', () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Learn Testing/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/Delete/i)[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});