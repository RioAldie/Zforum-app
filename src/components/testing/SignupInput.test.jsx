/**
 * skenario testing
 *
 * - SignupInput component
 *   - should handle name typing correctly
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call handleRegister function when signup button is clicked
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import SignupInput from './SignupInput';

expect.extend(matchers);

describe('SignupForm component', () => {
  afterEach(() => {
    cleanup();
  });

  //test untuk component inout name
  it('should handle name typing correctly', async () => {
    // Arrange
    render(<SignupInput handleRegister={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    // Action

    await userEvent.type(nameInput, 'nametest');
    // Assert
    expect(nameInput).toHaveValue('nametest');
  });

  // test untuk component input email
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<SignupInput handleRegister={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    // Action

    await userEvent.type(emailInput, 'emailtest');
    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });

  // test untuk component input password
  it('should handle password typing correctly', async () => {
    // Arrange
    render(<SignupInput handleRegister={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText(
      'Password'
    );
    // Action

    await userEvent.type(passwordInput, 'passwordtest');
    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  // test button component
  it('should call handleRegister function when Signup button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<SignupInput handleRegister={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'nametest');

    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'emailtest');

    const passwordInput = await screen.getByPlaceholderText(
      'Password'
    );
    await userEvent.type(passwordInput, 'passwordtest');

    const signupButton = await screen.getByRole('button', {
      name: 'Daftar',
    });

    // Action
    await userEvent.click(signupButton);
    // Assert
    expect(mockRegister).toBeCalled({
      name: 'nametest',
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
