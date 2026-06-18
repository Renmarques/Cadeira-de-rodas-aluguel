import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

const MAIN_CATEGORIES = ['Attire', 'Beauty', 'Clothing', 'Home'];

const FilterPanel = ({ 
  availableFilters, 
  activeFilters, 
  updateFilter, 
  updateOptionFilter, 
  clearFilters, 
  filterCount
}) => {
  
  const handleOptionToggle = (optionName, value) => {
    const currentOptions = activeFilters.options[optionName] || [];
    const updated = currentOptions.includes(value)
      ? currentOptions.filter(item => item !== value)
      : [...currentOptions, value];
      
    updateOptionFilter(optionName, updated);
  };

  const handleCategoryToggle = (category) => {
    const currentCategories = activeFilters.categories || [];
    // Case-insensitive check for toggling
    const isCurrentlySelected = currentCategories.some(c => c.toLowerCase() === category.toLowerCase());
    
    const updated = isCurrentlySelected
      ? currentCategories.filter(c => c.toLowerCase() !== category.toLowerCase())
      : [...currentCategories, category];
      
    console.log(`FilterPanel: Toggled category "${category}". New selection:`, updated);
    updateFilter('categories', updated);
  };

  const displayMinPrice = activeFilters.minPrice;
  const displayMaxPrice = activeFilters.maxPrice === Infinity 
    ? (availableFilters.maxPrice || 5000) 
    : activeFilters.maxPrice;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        {filterCount > 0 && (
          <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">
            {filterCount} applied
          </span>
        )}
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-medium mb-4 text-foreground">Category</h3>
        <div className="space-y-3">
          {MAIN_CATEGORIES.map((cat) => {
            const isChecked = (activeFilters.categories || []).some(
              c => c.toLowerCase() === cat.toLowerCase()
            );
            const id = `cat-${cat}`;
            
            return (
              <div key={cat} className="flex items-center">
                <Checkbox
                  id={id}
                  checked={isChecked}
                  onCheckedChange={() => handleCategoryToggle(cat)}
                />
                <Label htmlFor={id} className="ml-2 text-sm font-normal cursor-pointer">
                  {cat}
                </Label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-foreground">Price Range</h3>
          <span className="text-sm text-muted-foreground font-medium">
            ${displayMinPrice} - ${displayMaxPrice}
          </span>
        </div>
        
        <Slider
          value={[displayMinPrice, displayMaxPrice]}
          onValueChange={(val) => {
            updateFilter('minPrice', val[0]);
            updateFilter('maxPrice', val[1]);
          }}
          min={availableFilters.minPrice || 0}
          max={availableFilters.maxPrice || 5000}
          step={10}
          className="mb-6 mt-2"
        />
        
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <Label className="text-xs text-muted-foreground mb-1.5 block">Min Price</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
              <Input 
                type="number" 
                value={displayMinPrice}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  updateFilter('minPrice', val);
                }}
                className="pl-6 h-9 text-sm bg-background"
              />
            </div>
          </div>
          <div className="flex-1">
            <Label className="text-xs text-muted-foreground mb-1.5 block">Max Price</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
              <Input 
                type="number" 
                value={displayMaxPrice}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  updateFilter('maxPrice', val);
                }}
                className="pl-6 h-9 text-sm bg-background"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Options (Color, Material, etc. - Size is excluded in hook) */}
      {availableFilters.options && Object.entries(availableFilters.options).map(([optionName, values]) => {
        if (!values || values.length === 0) return null;
        
        return (
          <div key={optionName}>
            <h3 className="font-medium mb-4 text-foreground">{optionName}</h3>
            <div className="space-y-3">
              {values.map((val) => {
                const isChecked = (activeFilters.options[optionName] || []).includes(val);
                const id = `opt-${optionName}-${val}`;
                
                return (
                  <div key={val} className="flex items-center">
                    <Checkbox
                      id={id}
                      checked={isChecked}
                      onCheckedChange={() => handleOptionToggle(optionName, val)}
                    />
                    <Label htmlFor={id} className="ml-2 text-sm font-normal cursor-pointer">
                      {val}
                    </Label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {filterCount > 0 && (
        <Button 
          onClick={clearFilters} 
          variant="outline" 
          className="w-full text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </div>
  );
};

export default FilterPanel;