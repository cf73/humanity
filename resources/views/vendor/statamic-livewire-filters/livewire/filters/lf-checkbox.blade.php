<div>
    <div class="grid grid-cols-1 gap-y-4 pt-8 pb-8">
        @foreach($this->filter_options as $value => $label)
        <div class="flex items-center labelcontainer relative">
            <input 
                type="checkbox" 
                class="form-checkbox w-4 h-4 text-dusk bg-white border-dusk cursor-pointer rounded-full focus:ring-dusk focus:ring-2"
                id="{{ $field }}-{{ $value }}"
                wire:model.live="selected"
                value="{{ $value }}"
            >
            <label 
                for="{{ $field }}-{{ $value }}" 
                class="ml-2 text-skyNeutral"
            >
                {{ $label }}
                @if ($this->counts[$value] !== null)
                <span class="text-gray-500 ml-1">({{ $this->counts[$value] }})</span>
                @endif
            </label>
        </div>
        @endforeach
    </div>
    
    <div id="filterButtons" class="flex flex-row gap-4 hidden">
        <button id="closeFilters" class="btn-primary">View results</button>
        @unless ($selected == [])
            @include('statamic-livewire-filters::livewire.ui.clear-filters-button')
        @endunless

    </div>
</div>