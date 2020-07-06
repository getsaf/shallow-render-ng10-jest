import { AppComponent } from './app.component';
import { Shallow } from 'shallow-render';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;

  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule);
  });

  it('should render title', async () => {
    const { find } = await shallow.render();
    expect(find('.content span')[0].nativeElement.textContent).toContain(
      'shallow-render-ng10-jest app is running!'
    );
  });

  it('should render myInput', async () => {
    const { find } = await shallow.render({
      bind: { myInput: 'My Input Value' },
    });
    expect(find('.myInput').nativeElement.textContent).toBe('My Input Value');
  });
});
