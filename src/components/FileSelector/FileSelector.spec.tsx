import React from 'react';
import { render, screen } from '@testing-library/react';
import FileSelector from './FileSelector';
import { AppContext } from '../../views/StartPage/StartPage';
import { it, expect, vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { useAppState } from '../../state';

it('checks if button exists and click updates state', async () => {
  const onConfirm = vi.fn();
  const user = userEvent.setup();

  function App() {
    return (
      <AppContext.Provider
        value={
          { restoreSchemaFromLocalStorage: vi.fn() } as unknown as ReturnType<
            typeof useAppState
          >
        }
      >
        <FileSelector onConfirm={onConfirm} />
      </AppContext.Provider>
    );
  }
  render(<App />);

  const button = screen.getByTestId('eo-file-selector__button');
  expect(button).toBeInTheDocument();

  await user.click(button);

  expect(onConfirm).toHaveBeenCalledTimes(0);
});
